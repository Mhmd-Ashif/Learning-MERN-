# Learning HTML

## Tags

Understanding HTML tags is crucial as they provide structure and meaning to web content.

- **div (division)**: Used for creating separate sections on a webpage, allowing for versatile content inclusion, even other tags.

  ```html
  <div>
    <!-- Content goes here -->
  </div>
  ```

- **head**: Contains metadata about the HTML document, such as the title tag.

  ```html
  <head>
    <title>Document Title</title>
    <!-- Other metadata like links to stylesheets or scripts -->
  </head>
  ```

- **title**: Specifies the title of the web page, usually displayed in the browser's tab.

  ```html
  <title>Page Title</title>
  ```

- **body**: The section where all visible content gets rendered by web browsers.

  ```html
  <body>
    <!-- Content visible on the webpage -->
  </body>
  ```

- **h1 ... h6**: Headings of varying sizes, structuring content hierarchically.

  ```html
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <!-- ... -->
  <h6>Heading 6</h6>
  ```

- **p**: Defines paragraphs of text.

  ```html
  <p>This is a paragraph.</p>
  ```

- **img**: Inserts images into the body of the page, enhancing visual content.

  ```html
  <img src="image.jpg" alt="Description of the image" />
  ```

- **center**: An older tag, previously used to center elements within a page (Note: Deprecated in HTML5).

  ```html
  <center>
    <!-- Content to be centered -->
  </center>
  ```

- **b, i**: Stands for bold and italic, used for emphasizing text.

  ```html
  <b>Bold Text</b> <i>Italic Text</i>
  ```

- **button**: Creates interactive buttons, often utilized with JavaScript for added functionality.

  ```html
  <button onclick="myFunction()">Click me</button>
  ```

- **input**: Generates various input elements such as textboxes, radio buttons, etc., for user interaction.
  ```html
  <input type="text" id="username" name="username" />
  ```

## Attributes

Attributes enrich the functionality and behavior of HTML tags.

- `src` (inside `img`): Specifies the image URL to be displayed.

  ```html
  <img src="image.jpg" alt="Description of the image" />
  ```

- `href` (inside `a`): Specifies the URL of a hyperlink.

  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```

- `onclick` (inside `button`): Triggers a function or action when the button is clicked.

  ```html
  <button onclick="myFunction()">Click me</button>
  ```

- `id` (inside `input`): Provides a unique identifier for an input field.
  ```html
  <input type="text" id="username" name="username" />
  ```

Keep exploring HTML tags and their attributes to create engaging and structured web content!
