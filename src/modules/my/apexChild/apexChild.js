import { LightningElement } from 'lwc';
import someFunMethod from '@salesforce/apex/MyClass.someFunMethod';

export default class ApexChild extends LightningElement {
    apexData;

    connectedCallback() {
        someFunMethod()
            .then((result) => {
                console.log(result);
                this.apexData = result.data;
            })
            .catch((error) => console.error(error));
    }
}
