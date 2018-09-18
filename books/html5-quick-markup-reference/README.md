# HTML5 Quick Markup Reference

**Table of Contents**

* [Top-Level Document Definition](#top-level-document-definition)
* [Search Engine Optimization](#search-engine-optimization)
* [Favicons](#favicons)
* [Document Content Hierarchy](#document-content-hierarchy)
* [Semantic Elements](#semantic-elements)

---

## Top-Level Document Definition

...

## Search Engine Optimization

[Example Webpage](search-engine-optimization.html)

When defining meta tags a name-value pair is required, consisting of a name and content attribute in the meta tag.

```html
<meta name="description" content="Search Engine Optimization examples">
<meta name="robots" content="index, follow">
```

Some meta tags are more useful than others. In particular, the `title` and `description` meta tags are used by search engines. Others like `keywords` are less useful for purely SEO since search engines don't use them directly for rankings.

A meta tag is also used to define the charset, which defines the character set to be used for the document - usually either UTF-8 or UTF-16.

The http-equiv attribute is used to define HTTP header value of the content parameter.

The base tag is used to define the base URL for the webpage.

```html
<base url="http://www.example.com">
```

...

## Favicons

...

## Document Content Hierarchy

...

## Semantic Elements

...