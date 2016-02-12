/**
 * Created by terrence_watson on 2/11/16.
 */

var mappers = {
    default: require("./mappers/default")
    }
, traverse = require("traverse")
;

var Document = function(){

};

function documentFactory(){
    return Object.create(Document.prototype, {
        visible: {writable: true, configurable: true, value: false},
        display: {
            configurable: false,
            get() {
                return this._display
            },
            set(val) {
                this._display = val;
            }
        },
        search: {
            configurable: false,
            get() {
                return this._search;
            },
            set(val) {
                this._search = val;
            }
        }

    })
}

/*Document.installMapper = (mapperName, mapperCtr) => {
    mappers[mapperName] = mapperCtr;
}*/

/**
 * Creates a document from JSON
 * @param json
 * @param mapperName {String="default"}
 */
Document.create = (json, mapperName) => {
    var document = documentFactory();
    
    mapperName = mapperName || "default";
    var mapper = mappers[mapperName];
    if(!mapper) throw new Error("Mapper "+mapperName + " is not defined.");
    traverse(json)
        .forEach(function(item){
            var internalMapper = Object.create(mapper);
            if(this.parent){
                if(this.path.length === 1){
                    //Top level. Make assignments
                    document.visible = this.node.$.visible;
                    document.version = this.node.$.version;
                    document.id = this.node.$.id;
                    document.display = this.node.display;
                    document.search = this.node.search;
                }

            }
        })

    console.log(document);

}

module.exports = Document;