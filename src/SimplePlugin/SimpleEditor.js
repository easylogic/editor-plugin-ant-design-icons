import {EditorElement, SUBSCRIBE} from "@easylogic/editor"

export default class SimpleEditor extends EditorElement {
  template() {
    return /*html*/`<div class='simple-editor'>
    <object refClass="SelectEditor" label="Simple Value" key="value" options="sample,1,2,3" onchange="changeValue" />
  </div>`
  }

  [SUBSCRIBE('changeValue')](key, value) {
    this.parent.trigger('changeComponentProperty', key, value);
  }

}