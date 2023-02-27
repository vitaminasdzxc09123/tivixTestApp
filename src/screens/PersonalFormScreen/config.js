import { BUTTON, INPUT } from './constants';

export const personalDataForm = {
    id         : 'personalData',
    title      : 'Personal Data',
    validation : [],
    data       : [
        {
            id          : 'fullName',
            label       : 'Full Name',
            value       : '',
            isRequired  : true,
            type        : INPUT,
            controlData : {
                placeholder : 'Full Name'
            },
            validation : [ 'required', { max_length : 20 } ],
            error      : ''
        },
        {
            id          : 'email',
            label       : 'Email',
            value       : '',
            isRequired  : true,
            type        : INPUT,
            controlData : {
                placeholder : 'Email'
            },
            error : ''
        },
        {
            id          : 'address',
            label       : 'Address',
            value       : '',
            isRequired  : true,
            type        : INPUT,
            controlData : {
                placeholder : 'Address'
            },
            extraInputStyle : {
                minHeight    : 100,
                borderRadius : 20
            },
            error : ''
        },
        {
            id          : 'city',
            label       : 'City',
            value       : '',
            isRequired  : true,
            type        : INPUT,
            controlData : {
                placeholder : 'City'
            },
            error : ''
        },
        {
            id          : 'state',
            label       : 'State',
            value       : '',
            isRequired  : true,
            type        : INPUT,
            controlData : {
                placeholder : 'State'
            },
            validation : [ 'required', 'email' ],
            error      : ''
        },
        {
            id          : 'zipCode',
            label       : 'Zip Code',
            value       : '',
            isRequired  : true,
            type        : INPUT,
            controlData : {
                placeholder : 'Zip Code'
            },
            validation : [ 'required', 'email' ],
            error      : ''
        },
        {
            id    : 'submit',
            label : 'Submit',
            error : '',
            type  : BUTTON
        }
    ]
};
