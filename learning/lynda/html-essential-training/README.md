# HTML Essential Training

**Table of Contents**

* [Structuring Content](#structuring-content)

* [Nav Element](#nav-element.html)

* [Article Element](#article-element)

* [Section Element](#section-element)

* [Aside Element](#aside-element)

* [Div Element](#div-element)

---

## Structuring Content

Sectioning Elements - used to divide up an HTML page into distinct sections.

* `<h1>` ... `<h6>`

* `<article>`

* `<aside>`

* `<nav>`

* `<section>`

Semantic Elements - help add meaning to your document

* `<header>`

* `<main>`

* `<footer>`

Grouping Content - used to group together other elements

* `<div>`

Example of using structuring and semantic elements: [Sample HTML - Document Outline Only](document-outline.html) and [Sample HTML - Including Semantic Elements](semantic-elements.html)

## Nav Element

Semantic usage - section of a page that links to other pages or sections within a page. Use a list within a nav element when you have a list of links. [Sample Nav Element Usage](nav.html)

## Article Element

Best practices - self-contained composition within a document that can be independently distributed. A good way to think about it is like 'an article of clothing' - which is something that can stand out by itself separate from other content on the page. Ideal of syndicated content. [Sample Article Element Usage](article.html)

## Section Element

Best practices - generic section of document focused on thematic grouping of content. Theme of each section should be identified by a heading. Should be used only when semantically appropriate, not only for styling purposes. A `<div>` element is more appropriate for styling purposes. [Sample Section Element Usage](section.html)

## Aside Element

Represents related content that has a tangential relationship to the parent content, but is separate. It's use to create a section within the document. [Sample Aside Element Usage](aside.html)

## Div Element

Best used for content that needs to be grouped together, but doesn't convey any semantic value by itself. Recommended to be used as an element of *last resort* when no other elements are available and can convey some semantic meaning. Ideal for stylistic purposes. [Sample Div Element Usage](div.html)