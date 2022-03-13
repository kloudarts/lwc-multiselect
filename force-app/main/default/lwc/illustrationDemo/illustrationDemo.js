import { LightningElement,api } from 'lwc';

export default class IllustrationDemo extends LightningElement {
    @api variant;
    @api size = 'small';
    @api header;
    @api message;

}