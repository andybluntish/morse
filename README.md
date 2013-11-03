# morse.js

Convert text to and from morse code.

## Usage

Simply call `encode` and pass in a selector to convert the contents of the selected elements to morse code.

```js
morse.encode('.morse');
```


```html
<!-- Before -->
<p>Here is some text in <span class="morse">morse code</span>.</p>

<!-- After -->
<p>Here is some text in <span class="morse" data-original-value="morse code">-- --- .-. ... .  -.-. --- -.. .</span>.</p>

```

Decode works just the same.

```js
morse.decode('.morse');
```

```html
<!-- Before -->
<p>Here is some text in <span class="morse">-- --- .-. ... .  -.-. --- -.. .</span>.</p>

<!-- After -->
<p>Here is some text in <span class="morse">morse code</span>.</p>
```

We use `document.querySelectorAll()` internally, so any valid `querySelector` selector will work.
