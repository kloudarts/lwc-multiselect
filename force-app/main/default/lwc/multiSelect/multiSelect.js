import { LightningElement,api } from 'lwc';

const allPicklistEntry = {
    label : 'All',
    value :'All'
}

export default class MultiSelect extends LightningElement {

    @api label = 'Label';
    @api picklistEntries = [
        {
            label: 'option 1',
            value: 'option 1'
        }, 
        {
            label: 'option 2',
            value: 'option 2'
        },
        {
            label: 'option 3',
            value: 'option 3'
        },
        {
            label: 'option 4',
            value: 'option 4'
        },
        {
            label: 'option 5',
            value: 'option 5'
        },
        {
            label: 'option 6',
            value: 'option 6'
        }
    ];

    @api isRequired = false;
    @api helpText;

    selectedValues = [];

    multiSelectListClass = 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click';

    connectedCallback() {
        this.picklistEntries.unshift(allPicklistEntry);
    }

    toggleMultiSelectPicklist(event){
        if(this.multiSelectListClass === 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click'){
            this.multiSelectListClass = 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open';
        }
        else{
            this.multiSelectListClass = 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click';
        }
    }

    updateSelectedValues(event){
        event.stopPropagation();

        if(event.detail.value === 'All'){
            this.selectedValues.length = 0;
            //this.selectedValues.splice(0, this.selectedValues.length);
            if(event.detail.selected){
                this.picklistEntries.forEach((element) => {this.selectedValues.push(element.value)});
            }
           
        } else {
            if(!this.selectedValues.includes(event.detail.value)){
                this.selectedValues.push(event.detail.value);
            }
            else{
                for(let i = 0; i < this.selectedValues.length; i++){
                    if(this.selectedValues[i] === 'All'){
                        this.selectedValues.splice(i, 1);
                    }
                    if(this.selectedValues[i] === event.detail.value){
                        this.selectedValues.splice(i, 1);
                        break;
                    }
                }
            }
        }
        this.template.querySelectorAll('c-picklist-item').forEach((element) => element.updateValues());

        this.sendSelectedValuesEvent();
    }

    get selectOptionText(){
        console.log('getter selectionText');
        let displayText = 'Select values...';
        
        if(this.selectedValues.length === 1){
            displayText = '1 value selected'; 
        }
        else if(this.selectedValues.length > 1){
            if(this.selectedValues.includes('All')){
                displayText = this.selectedValues.length - 1  + ' values selected';
            } else {
                displayText = this.selectedValues.length + ' values selected';
            }
            
        }
        return displayText;
    } 

    sendSelectedValuesEvent(){
        const selectedValuesEvent = new CustomEvent('selectedvaluesevent', {
            detail: this.selectedValues,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(selectedValuesEvent);
    }
}