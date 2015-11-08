var sinon = require("sinon")
  , chai = require("chai")
  , expect = chai.expect
  , sinonChai = require("sinon-chai")
  , chaiThings = require("chai-things")
  , rewire = require("rewire")
;

chai.use(sinonChai);
chai.use(chaiThings);

describe("config", function(){
	beforeEach(function(){
		this.config = rewire("../configuration");
		this.appName = this.config.__get__("APP_NAME");
	});

	describe("defaults", function(){
		beforeEach(function(){
			this.defaultConfig = this.config.__get__("defaultConfig");
		});

		it("should use default options", function(){
			//delete _ key from config, added by rc
			
			delete this.config._;
			expect(this.config).to.deep.equal(this.defaultConfig);					
		});

	});
	
	describe("production", function(){
		beforeEach(function(){
			process.env.NODE_ENV = "production";
			this.config = rewire("../configuration");
			this.appName = this.config.__get__("APP_NAME");

		});

		afterEach(function(){
			delete process.env.NODE_ENV;
		});

		it("should append the app name with _PRODUCTION in prod mode", function(){
			expect(this.appName).to.contain("PRODUCTION");
		})
	});

	/*describe("config file", function(){
		beforeEach(function(){
			this.mock({
				"/etc/" + this.appName + "rc": JSON.stringify({'PORT': 'fake_port'});
			});

			this.config = rewire("../configuration");

		});

		it("should use a configuration file if one is available", function(){
			expect(this.config.PORT).to.equal("fake_port");
		});

		afterEach(function(){
			this.mock.restore();
		})
	})*/
})