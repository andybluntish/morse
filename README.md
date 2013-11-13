# morse.js

Convert text to and from morse code.

## Usage

### Encode

```js
morse.encode('SOS'); // ... --- ...
```

### Decode 

```js
morse.decode('... --- ...'); // sos
```

### Encode HTML

```js
// <p class="to-morse">I have a <b>ham</p> radio</p>
morse.encodeHTML('.to-morse');
// <p class="to-morse">..  .... .- ...- .  .- <b>.... .- --</b> .-. .- -.. .. ---</p>
```

### Decode HTML

```js
// <p class="to-morse">..  .... .- ...- .  .- <b>.... .- --</b> .-. .- -.. .. ---</p>
morse.decodeHTML('.to-morse');
// <p class="to-morse">i have a <b>ham</p> radio</p>
```
