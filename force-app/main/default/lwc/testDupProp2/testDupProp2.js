import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class TestDupProp extends LightningElement {
    prop1;
    @api recordId;

    connectedCallback() {
        debugger;
        console.log(`In connectedCallback`);
    }

    @wire(getRecord, {recordId: '$recordId', fields: {}})
    prop1;
}