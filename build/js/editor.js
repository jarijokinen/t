!function(){"use strict";var e=window.wp.element,t=window.wp.plugins,n=window.wp.editPost,i=window.wp.compose,r=window.wp.data,a=window.wp.components,o=(0,i.compose)((0,r.withDispatch)((function(e,t){return{setMetaFieldValue:function(n){var i,r,a;e("core/editor").editPost({meta:(i={},r=t.fieldName,a=n,r in i?Object.defineProperty(i,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[r]=a,i)})}}})),(0,r.withSelect)((function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName]}})))((function(t){return(0,e.createElement)(a.ToggleControl,{label:"Integrated Header",checked:t.metaFieldValue,onChange:function(e){return t.setMetaFieldValue(e)}})}));(0,t.registerPlugin)("t-integrated-header-document-setting-panel",{render:function(){return(0,e.createElement)(n.PluginDocumentSettingPanel,{name:"t-theme-settings",title:"Theme Settings"},(0,e.createElement)(o,{fieldName:"t_integrated_header"}))}})}();