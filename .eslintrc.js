/* eslint-disable more/no-hardcoded-configuration-data */
// eslint-disable-next-line import/no-commonjs
module.exports = {
    root     : true,
    extends  : 'webbylab',
    settings : {
        'import/ignore'     : [ 'node_modules' ],
        'react/jsx-no-bind' : [ false ],
        'react'             : { version : 'detect' }
    },
    rules : {
        'import/no-extraneous-dependencies' : [ 'error', { 'devDependencies' : true } ],
        'no-console'                        : 'off',
        'no-restricted-syntax'              : [
            'error',
            {
                'selector' : "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace)$/]",
                'message'  : 'Unexpected property on console object was called'
            }
        ],
        'key-spacing'      : [ 'error', { 'beforeColon' : true, 'afterColon' : true, 'mode' : 'strict', 'align' : 'colon' } ],
        'no-magic-numbers' : 'off',
        'camelcase'        : 'off'
    }
};
