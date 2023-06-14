import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class TestDupProp extends LightningElement {
    prop1;
    @api recordId;

    renderedCallback() {
        debugger;
    }
    connectedCallback() {
        debugger;
        console.log(`In connectedCallback`);
    }

    @wire(getRecord, {recordId: '$recordId', fields: {}})
    prop2({error, data}) {
        if (data) {
            console.log(`The data: ${data}`);
        }
    }

    prop1() {
        console.log(`In prop1`);
    }
}