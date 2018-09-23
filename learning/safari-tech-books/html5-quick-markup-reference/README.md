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

[View Example](search-engine-optimization.html)

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

## Favicons

[View Example](favicon.html)

the `link` tag is used to set a favicon for a webpage. This is used by defining the rel attribute as *icon* and an href value.

```html
<link rel="icon" href="images/favicon.ico">
```

The rel="icon" attribute can be used for other types of icons, such as for apple touch devices.

...

## [Chapter 9 - Document Content Hierarchy](content-hierarchy.html)

Heading level tags should be used for adding semantic value to contnet. Level 1 heading `<h1>` being the most important and `<h6>` being the least important.

The heading tags are used to create an outline of the document. Use the [Chrome HTML5 outliner extension](https://github.com/h5o/h5o-chrome) to view the document outline in the browser.

## Semantic Elements

HTML5 semantic elements are used to organize content into a logical content hierarchy. The [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) is very good reference for HTML5 elements are their usage.

The main elements used to achieve semantic hierarchy are:

HTML5 sectioning content - *block level*

* header - header information of the document or content section
* footer - footer information of the document or content section
* section - a distinct section of a webpage
* article - a self-contained composition in a document
* main - the main content area for the document
* nav - navigational content
* aside - portion of a document whose content is indirectly related to the main content
* figure - used in conjunction with figcaption, it represents content that is accompanied by a caption
* figcaption - caption contnet used with a figure

Additional HTML5 elements - *flow content*

* details - content hidden and accompanied by visible content in a summary element
* summary - the visible content used in conjunction and as a child of a details element
* mark - text which is marked or highlighted for semantic purposes
* time - represents a specific period of time