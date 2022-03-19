import { LightningElement,api } from 'lwc';

export default class PicklistItem extends LightningElement {


    @api picklistEntry;
    @api selectedEntries = [];

    

    listClass = 'slds-dropdown__item';
    selected = false;

    @api updateValues(){
        if(this.selectedEntries.includes(this.picklistEntry.value)){
            this.listClass = 'slds-dropdown__item slds-is-selected';
            this.selected = true;
        } else {
            this.listClass = 'slds-dropdown__item';        
            this.selected = false;
        }
    }

    handleItemSelection(){
        if(this.selected === false){
            this.selected = true;
            this.listClass = 'slds-dropdown__item slds-is-selected';
        }
        else{
            this.selected = false;
            this.listClass = 'slds-dropdown__item';
        }

        let detail = {};
        detail.value = this.picklistEntry.value;
        detail.selected = this.selected;


        this.dispatchEvent(new CustomEvent('selectmultiselectvalue', { detail: detail}));
    }

 
}