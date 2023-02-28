![Action Validation](https://github.com/betty-services/Convert-Custom-Action-Functions/actions/workflows/main.yml/badge.svg?event=push)

# Convert Steps Custom Action Functions

This repository hosts the code for the custom actions steps found in the [Convert Steps](https://my.bettyblocks.com/block-store/fcf5541b-f821-4374-9e9e-2def86e5f989/) from the Betty Blocks block store.

## This repository hosts the following steps:

- Convert JSON to Object
- Convert Number to Text
- Convert Object to JSON
- Convert Text to Checkbox
- Convert Text to Number
- Convert Object to XML
- Convert Text to URI Encode

### Convert JSON to Object

This step converts a JSON string into an Object.

### Convert Number to Text

This step converts a Number to Text.

### Convert Object to JSON

This step converts an Object to it's JSON equivalent.

### Convert Text to Checkbox

This step converts a Text into a Checkbox.
If the text equals `true` the checkbox ouput will be `true`.

### Convert Text to Number

This step converts a Text into a Number.
If the conversion can't happen, a `NaN` will be returned.

### Convert Object to XML

This step converts an Object into XML.

For example:

```JS
{
    xml: {
        new: 'object',
        equals: true
    }
}
```

will return as:

```XML
<?xml version="1.0" encoding="utf-8"?><xml><new>object</new><equals>true</equals></xml>
```

### Convert Text to URI Encoded

This step URI Encodes an piece of Text.
For example:

```
maarten.geerse@bettyblocks.com
```

will result in

```
maarten.geerse%40bettyblocks.com
```
