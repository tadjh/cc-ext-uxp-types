declare class AbortController {
  /**
   * AbortSignal object, which can be used to abort a request
   */
  signal: AbortSignal;
  /**
   * Aborts a request before it has completed.
   * If the reason is not specified, the reason is set to "AbortError" DomException
   * @param reason - the reason why the operation was aborted
   */
  abort(reason: any): void;
}

declare class AbortSignal {
  /**
   * Creates an AbortSignal object that is already set as aborted.
   * @returns AbortSignal object with the AbortSignal.aborted property is set to true
   *      and AbortSignal.reason set to the specified or default reason
   */
  static abort(reason: any): AbortSignal;
  /**
   * Whether the request that the signal is communicating with is aborted or not
   */
  aborted: boolean;
  /**
   * The abort reason, once the signal has aborted.
   * `Undefined` when the signal has not been aborted.
   */
  reason: any;
  /**
   * Throws the signal's abort reason if the signal has been aborted.
   * Otherwise, it does nothing.
   */
  throwIfAborted(): void;
}

/**
 * @example
 * alert("This is alert message");
 * @param message - A message you want to display in the alert dialog<br></br>
 */
declare function alert(message: string): void;
/**
 * @example
 * confirm("This is confirmation message");
 * @param message - A string you want to display in the confirmation dialog.
 * @returns true If OK button is pressed and false when Cancel button is pressed.
 *
 * The following are additional simple alerts supported by UXP
 * 1. {@link ./alert.md|alert()}
 * 2. {@link ./prompt.md|prompt()}
 */
declare function confirm(message: string): boolean;
/**
 * @example
 * // Below prompt function has 2 params
 * // "Enter your name: " - Message to display
 * // "Adobe" - Default value that will be present in the Prompt pop-up at launch
 * prompt("Enter your name: ","Adobe");
 * @param message - A string of text to display to the user.
 * @param prompt - Default value for the field.
 * @returns message entered by the user in the prompt field or default value if nothing entered.
 *
 * The following are additional simple alerts supported by UXP
 * 1. {@link ./confirm.md|confirm()}
 * 2. {@link ./alert.md|alert()}
 */
declare function prompt(message: string, prompt: string): string;

/**
 * Creates an instance of Attr.
 */
declare class Attr extends Node {
  constructor(document: Document, nodeName: string);
  readonly nodeName: string;
  readonly localName: string;
  readonly name: string;
  readonly specified: boolean;
  value: any;
  readonly nodeType: number;
  nodeValue: any;
  readonly ownerElement: Element;
  remove(): void;
  readonly contentEditable: any;
  readonly isConnected: boolean;
  readonly parentNode: Node;
  readonly parentElement: Element;
  readonly firstChild: Node;
  readonly lastChild: Node;
  readonly previousSibling: Node;
  readonly nextSibling: Node;
  readonly firstElementChild: Node;
  readonly lastElementChild: Node;
  readonly previousElementSibling: Node;
  readonly nextElementSibling: Node;
  textContent: string;
  hasChildNodes(): boolean;
  readonly childNodes: NodeList;
  readonly children: HTMLCollection;
  readonly ownerDocument: any;
  readonly attributes: any;
  cloneNode(deep: boolean): Node;
  appendChild(child: Node): Node;
  insertBefore(child: Node, before: Node): Node;
  replaceChild(newChild: Node, oldChild: Node): Node;
  removeChild(child: Node): Node;
  before(...nodes: Node[][]): void;
  after(...nodes: Node[][]): void;
  replaceWith(...nodes: Node[][]): void;
  contains(node: Node): void;
  /**
   * @returns root node
   */
  getRootNode(options: any): Node;
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}

declare class CanvasGradient {
  /**
   * Adds a new color stop, defined by an `offset` and a `color value`, to a given canvas gradient.
   * @param offset - A number between 0 and 1, inclusive, representing the position
   * of the color stop. 0 represents the start of the gradient and 1 represents the end.
   * @param colorValue - A CSS `<color>` value representing the color of the stop.
   */
  addColorStop(offset: number, colorValue: string): void;
}

/**
 * Creates an instance of CanvasRenderingContext2D.
 */
declare class CanvasRenderingContext2D {
  /**
   * Get the thickness of lines.
   */
  lineWidth: number;
  /**
   * Get the shape used to join two line segments where they meet.
   */
  lineJoin: string;
  /**
   * Get the shape used to draw the end points of lines.
   */
  lineCap: string;
  /**
   * Creates a gradient along the line connecting two given coordinates.
   * @param x0 - The x-axis coordinate of the start point.
   * @param y0 - The y-axis coordinate of the start point.
   * @param x1 - The x-axis coordinate of the end point.
   * @param y1 - The y-axis coordinate of the end point.
   * @returns A linear CanvasGradient object initialized with the specified line.
   */
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): CanvasGradient;
  /**
   * Creates a radial gradient using the size and coordinates of two circles.
   * @param x0 - The x-axis coordinate of the start circle.
   * @param y0 - The y-axis coordinate of the start circle.
   * @param r0 - The radius of the start circle. Must be non-negative and finite.
   * @param x1 - The x-axis coordinate of the end circle.
   * @param y1 - The y-axis coordinate of the end circle.
   * @param r1 - The radius of the end circle. Must be non-negative and finite.
   * @returns A radial CanvasGradient object initialized with the two specified circles.
   */
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number
  ): CanvasGradient;
  /**
   * Get the global alpha(transparency) value.
   */
  globalAlpha: number;
  /**
   * Get the fill style used inside shapes.
   */
  fillStyle: string | CanvasGradient;
  /**
   * Get the color to use for the strokes (outlines) around shapes.
   */
  strokeStyle: string;
  /**
   * Creates a new path.
   */
  beginPath(): void;
  /**
   * Add a straight line from the current point to the start of the current sub-path.
   */
  closePath(): void;
  /**
   * Begins a new sub-path at the point specified by the given (x, y) coordinates.
   * @param x - The x-axis (horizontal) coordinate of the point.
   * @param y - The y-axis (vertical) coordinate of the point.
   */
  moveTo(x: number, y: number): void;
  /**
   * Adds a straight line to the current sub-path by connecting the sub-path's
   * last point to the specified (x, y) coordinates.
   * @param x - The x-axis coordinate of the line's end point.
   * @param y - The y-axis coordinate of the line's end point.
   */
  lineTo(x: number, y: number): void;
  /**
   * Adds a circular arc to the current sub-path.
   * @param x - The horizontal coordinate of the arc's center.
   * @param y - The vertical coordinate of the arc's center.
   * @param radius - The arc's radius. Must be positive.
   * @param startAngle - The angle at which the arc starts in radians,
   * measured from the positive x-axis.
   * @param endAngle - The angle at which the arc ends in radians,
   * measured from the positive x-axis.
   * @param counterclockwise - An optional boolean value. If true,
   * draws the arc counter-clockwise between the start and end angles.
   * The default is false (clockwise).
   */
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise: boolean
  ): void;
  /**
   * Adds a circular arc to the current sub-path, using the given control points and radius.
   * @param x1 - The x-axis coordinate of the first control point.
   * @param y1 - The y-axis coordinate of the first control point.
   * @param x2 - The x-axis coordinate of the second control point.
   * @param y2 - The y-axis coordinate of the second control point.
   * @param radius - The arc's radius. Must be non-negative.
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  /**
   * Adds a cubic Bézier curve to the current sub-path.
   * @param cp1x - The x-axis coordinate of the first control point.
   * @param cp1y - The y-axis coordinate of the first control point.
   * @param cp2x - The x-axis coordinate of the second control point.
   * @param cp2y - The y-axis coordinate of the second control point.
   * @param x - The x-axis coordinate of the end point.
   * @param y - The y-axis coordinate of the end point.
   */
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ): void;
  /**
   * Adds a quadratic Bézier curve to the current sub-path.
   * @param cpx - The x-axis coordinate of the control point.
   * @param cpy - The y-axis coordinate of the control point.
   * @param x - The x-axis coordinate of the end point.
   * @param y - The y-axis coordinate of the end point.
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  /**
   * Adds a rectangle to the current path.
   * @param x - The x-axis coordinate of the rectangle's starting point.
   * @param y - The y-axis coordinate of the rectangle's starting point.
   * @param width - The rectangle's width.
   * @param height - The rectangle's height.
   */
  rect(x: number, y: number, width: number, height: number): void;
  /**
   * Strokes (outlines) the current or given path with the current stroke style.
   * @param path - An optional Path2D object to stroke.
   */
  stroke(path: Path2D): void;
  /**
   * Fills the current or given path with the current fillStyle.<br></br>
   * @param pathOrFillRule - An optional Path2D object to fill or
   * String which defines an algorithm to determine if a point is inside or
   * outside the filling region.
   */
  fill(pathOrFillRule: Path2D | string): void;
  /**
   * Draws a rectangle that is filled according to the current fillStyle.
   * @param x - The x-axis coordinate of the rectangle's starting point.
   * @param y - The y-axis coordinate of the rectangle's starting point.
   * @param width - The rectangle's width.
   * @param height - The rectangle's height.
   */
  fillRect(x: number, y: number, width: number, height: number): void;
  /**
   * Draws a rectangle that is stroked (outlined) according to the current strokeStyle
   * @param x - The x-axis coordinate of the rectangle's starting point.
   * @param y - The y-axis coordinate of the rectangle's starting point.
   * @param width - The rectangle's width.
   * @param height - The rectangle's height.
   */
  strokeRect(x: number, y: number, width: number, height: number): void;
  /**
   * Erases the pixels in a rectangular area by setting them to transparent black.
   * @param x - The x-axis coordinate of the rectangle's starting point.
   * @param y - The y-axis coordinate of the rectangle's starting point.
   * @param width - The rectangle's width.
   * @param height - The rectangle's height.
   */
  clearRect(x: number, y: number, width: number, height: number): void;
}

declare class CharacterData extends Node {
  data: string;
  textContent: string;
  nodeValue: string;
  readonly length: number;
  substringData(offset: any, count: any): string;
  appendData(arg: string): void;
  insertData(offset: number, arg: string): void;
  deleteData(offset: number, count: number): void;
  replaceData(offset: number, count: number, arg: string): void;
  readonly contentEditable: any;
  readonly isConnected: boolean;
  readonly parentNode: Node;
  readonly parentElement: Element;
  readonly firstChild: Node;
  readonly lastChild: Node;
  readonly previousSibling: Node;
  readonly nextSibling: Node;
  readonly firstElementChild: Node;
  readonly lastElementChild: Node;
  readonly previousElementSibling: Node;
  readonly nextElementSibling: Node;
  hasChildNodes(): boolean;
  readonly childNodes: NodeList;
  readonly children: HTMLCollection;
  readonly ownerDocument: any;
  readonly attributes: any;
  cloneNode(deep: boolean): Node;
  appendChild(child: Node): Node;
  insertBefore(child: Node, before: Node): Node;
  replaceChild(newChild: Node, oldChild: Node): Node;
  removeChild(child: Node): Node;
  remove(): void;
  before(...nodes: Node[][]): void;
  after(...nodes: Node[][]): void;
  replaceWith(...nodes: Node[][]): void;
  contains(node: Node): void;
  /**
   * @returns root node
   */
  getRootNode(options: any): Node;
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}

/**
 * Creates an instance of ClassList.
 */
declare class ClassList extends DOMTokenList {
  constructor(node: any);
  value: string;
  /**
   * Returns the number of tokens in the list
   */
  readonly length: any;
  /**
   * Adds the specified tokens to the token list. If the token is already present, no error is thrown.
   */
  add(...tokens: string[]): void;
  /**
   * Removes the specified items from the token list. If the token is not present, no error is thrown.
   */
  remove(...tokens: string[]): void;
  /**
   * Replaces an old token with a new token. If the old token doesn't exist,
   * no action occurs, and `false` is returned.
   */
  replace(oldToken: any, newToken: any): boolean;
  /**
   * Toggles a token within the list. If `force` is not present, then the following
   * rules are applied:
   *
   * * if the token is present, it is removed, and `false` is returned
   * * if the token isn't present, it is added, and `true` is returned
   *
   * If `force` is supplied, then:
   *
   * * if `true`, the token is added
   * * if `false`, the token is removed
   * @returns if the token exists in the last after the operation
   */
  toggle(token: string, force: boolean): boolean;
  /**
   * Return the item at the specified index, or `null` if the index is out-of-range
   * @returns the item at the index, or null if index is out of range
   */
  item(index: number): string;
  /**
   * Returns whether the token is in the list or not.
   * @returns if `true`, the token is in the list, otherwise it isn't
   */
  contains(token: any): boolean;
  /**
   * Returns `true` if the token is acceptable to the list; otherwise returns `false`.
   * If `false` is returned, passing the token would throw an error when calling
   * any other method.
   * @returns if `true`, the token is acceptable when calling other methods
   */
  supports(token: string): boolean;
}

/**
 * Creates an instance of Comment.
 */
declare class Comment extends CharacterData {
  constructor(document: Document, comment: string);
  readonly nodeName: string;
  readonly nodeType: number;
  data: string;
  textContent: string;
  nodeValue: string;
  readonly length: number;
  substringData(offset: any, count: any): string;
  appendData(arg: string): void;
  insertData(offset: number, arg: string): void;
  deleteData(offset: number, count: number): void;
  replaceData(offset: number, count: number, arg: string): void;
  readonly contentEditable: any;
  readonly isConnected: boolean;
  readonly parentNode: Node;
  readonly parentElement: Element;
  readonly firstChild: Node;
  readonly lastChild: Node;
  readonly previousSibling: Node;
  readonly nextSibling: Node;
  readonly firstElementChild: Node;
  readonly lastElementChild: Node;
  readonly previousElementSibling: Node;
  readonly nextElementSibling: Node;
  hasChildNodes(): boolean;
  readonly childNodes: NodeList;
  readonly children: HTMLCollection;
  readonly ownerDocument: any;
  readonly attributes: any;
  cloneNode(deep: boolean): Node;
  appendChild(child: Node): Node;
  insertBefore(child: Node, before: Node): Node;
  replaceChild(newChild: Node, oldChild: Node): Node;
  removeChild(child: Node): Node;
  remove(): void;
  before(...nodes: Node[][]): void;
  after(...nodes: Node[][]): void;
  replaceWith(...nodes: Node[][]): void;
  contains(node: Node): void;
  /**
   * @returns root node
   */
  getRootNode(options: any): Node;
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}

declare class CustomElementRegistry {
  /**
   * Defines a new custom element.
   * @param name - Name for the new custom element
   * @param constructor - Constructor for the new custom element
   * @param options - Object that controls how the element is defined
   * @param options.extends - The name of a built-in element to extend
   */
  define(
    name: string,
    constructor: CustomElement,
    options: {
      extends: string;
    }
  ): void;
  /**
   * Returns the constructor for the named custom element
   * @param name - The name of the custom element
   */
  get(name: string): void;
  /**
   * Upgrade all potential custom elements under tree rooted at 'root'.
   *
   * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
   * @param root - Node instance with shadow-containing descendant elements to upgrade
   */
  upgrade(root: any): void;
  /**
   * Returns a Promise that resolves when the named custom-element is defined.
   *
   * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
   * @param name - The name of the custom element
   */
  whenDefined(name: string): void;
}
declare type CustomElement = any;
declare type StyleSheetList = any;
declare type UXPContainer = any;
declare var document: Document;

/**
 * Creates an instance of Document.
 */
declare class Document extends Node {
  /**
   * Indicates if the computer is online
   */
  readonly onLine: boolean;
  readonly nodeName: string;
  readonly nodeType: number;
  createElement(name: string): Element;
  createElementNS(ns: string, name: string): Element;
  createEvent(eventType: string): void;
  createAttribute(nodeName: string): Attr;
  createTextNode(text?: string): Text;
  createComment(comment?: string): Comment;
  createDocumentFragment(): DocumentFragment;
  /**
   * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
   *
   * This represents the nodes of a document subtree and a position within them
   * @param root - A Node representing the root node as specified when the TreeWalker was created
   * @param whatToShow - An unsigned long being a bitmask made of constants describing the types of Node that must be presented
   * @param filter - NodeFilter used to select the relevant nodes
   */
  createTreeWalker(
    root: Node,
    whatToShow: number,
    filter: NodeFilter
  ): TreeWalker;
  readonly uxpContainer: UXPContainer;
  cloneNode(deep: boolean): Document;
  adoptNode(externalNode: Node, deep: boolean): Node;
  importNode(externalNode: Node, deep: boolean): Node;
  readonly activeElement: Node;
  readonly documentElement: Document;
  readonly head: HTMLHeadElement;
  readonly body: HTMLBodyElement;
  readonly clipboard: Clipboard;
  readonly styleSheets: StyleSheetList;
  querySelector(selector: string): Node;
  querySelectorAll(selector: string): NodeList;
  getElementsByClassName(name: string): NodeList;
  getElementsByTagName(name: string): NodeList;
  getElementById(id: string): Element;
  readonly contentEditable: any;
  readonly isConnected: boolean;
  readonly parentNode: Node;
  readonly parentElement: Element;
  readonly firstChild: Node;
  readonly lastChild: Node;
  readonly previousSibling: Node;
  readonly nextSibling: Node;
  readonly firstElementChild: Node;
  readonly lastElementChild: Node;
  readonly previousElementSibling: Node;
  readonly nextElementSibling: Node;
  textContent: string;
  hasChildNodes(): boolean;
  readonly childNodes: NodeList;
  readonly children: HTMLCollection;
  readonly ownerDocument: any;
  readonly attributes: any;
  appendChild(child: Node): Node;
  insertBefore(child: Node, before: Node): Node;
  replaceChild(newChild: Node, oldChild: Node): Node;
  removeChild(child: Node): Node;
  remove(): void;
  before(...nodes: Node[][]): void;
  after(...nodes: Node[][]): void;
  replaceWith(...nodes: Node[][]): void;
  contains(node: Node): void;
  /**
   * @returns root node
   */
  getRootNode(options: any): Node;
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}

declare class DocumentFragment {
  /**
   * A number representing the number of children of the element.
   */
  readonly childElementCount: number;
  /**
   * Returns the first Element node within the DocumentFragment matching the selector string
   * @param selector - A string containing one or more CSS selectors separated by commas
   */
  querySelector(selector: string): Element;
  /**
   * Returns the list of nodes within the DocumentFragment matcthing the selectors
   * @param selector - A string containing one or more CSS selectors separated by commas
   */
  querySelectorAll(selector: string): NodeList;
  /**
   * inserts a set of Node objects or string objects after the last child of the document fragment
   * @param args - A set of Node or string objects to insert.
   */
  append(...args: any[]): void;
}

/**
 * DOMTokenList supports the ClassList and other token list functionality
 */
declare class DOMTokenList {
  /**
   * Returns the number of tokens in the list
   */
  readonly length: any;
  /**
   * The serialized string value of the token list
   */
  readonly value: any;
  /**
   * Adds the specified tokens to the token list. If the token is already present, no error is thrown.
   */
  add(...tokens: string[]): void;
  /**
   * Removes the specified items from the token list. If the token is not present, no error is thrown.
   */
  remove(...tokens: string[]): void;
  /**
   * Replaces an old token with a new token. If the old token doesn't exist,
   * no action occurs, and `false` is returned.
   */
  replace(oldToken: any, newToken: any): void;
  /**
   * Toggles a token within the list. If `force` is not present, then the following
   * rules are applied:
   *
   * * if the token is present, it is removed, and `false` is returned
   * * if the token isn't present, it is added, and `true` is returned
   *
   * If `force` is supplied, then:
   *
   * * if `true`, the token is added
   * * if `false`, the token is removed
   * @returns if the token exists in the last after the operation
   */
  toggle(token: string, force: boolean): boolean;
  /**
   * Return the item at the specified index, or `null` if the index is out-of-range
   * @returns the item at the index, or null if index is out of range
   */
  item(index: number): string;
  /**
   * Returns whether the token is in the list or not.
   * @returns if `true`, the token is in the list, otherwise it isn't
   */
  contains(token: any): boolean;
  /**
   * Returns `true` if the token is acceptable to the list; otherwise returns `false`.
   * If `false` is returned, passing the token would throw an error when calling
   * any other method.
   * @returns if `true`, the token is acceptable when calling other methods
   */
  supports(token: string): boolean;
}
/**
 * Guards against invalid tokens in the token list. The spec indicates that tokens matching
 * the empty string should throw a SyntaxError and tokens containing whitespace should
 * throw InvalidCharacterError exceptions.
 * @returns If true, the token is valid
 */
declare function guard(token: any): boolean;

declare class Element extends Node {
  readonly nodeName: string;
  /**
   * A string representing the local part of the qualified name of the element
   */
  readonly localName: string;
  /**
   * A string indicating the element's tag name
   */
  readonly tagName: string;
  readonly nodeType: number;
  /**
   * Returns the namespace URI of the element, or null if the element is not in a namespace.
   */
  readonly namespaceURI: string;
  /**
   * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
   */
  id: string;
  tabIndex: number;
  className: string;
  readonly attributes: NamedNodeMap;
  readonly style: Style;
  readonly clientLeft: number;
  readonly clientTop: number;
  readonly clientWidth: number;
  readonly clientHeight: number;
  readonly offsetParent: Element;
  readonly offsetLeft: number;
  readonly offsetTop: number;
  readonly offsetWidth: number;
  readonly offsetHeight: number;
  scrollLeft: number;
  scrollTop: number;
  readonly scrollWidth: number;
  readonly scrollHeight: number;
  /**
   * Indicates if the element will focus automatically when it is loaded
   */
  autofocus: boolean;
  readonly uxpContainer: number;
  /**
   * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
   *
   * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
   */
  readonly shadowRoot: ShadowRoot;
  /**
   * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
   * @param xOrOptions - either the new scrollLeft position or an options object.
   * @param y - the optional new scrollTop position.
   */
  scrollTo(xOrOptions: any, y: any): void;
  scrollIntoView(alignToTop: boolean): void;
  scrollIntoViewIfNeeded(): void;
  /**
   * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
   *
   * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
   * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
   */
  attachShadow(init: any): ShadowRoot;
  focus(): void;
  blur(): void;
  disabled: boolean;
  /**
   * @param name - Name of the attribute whose value you want to get.
   */
  getAttribute(name: string): string;
  /**
   * @param name - Name of the attribute whose value is to be set
   * @param value - Value to assign to the attribute
   */
  setAttribute(name: string, value: string): void;
  removeAttribute(name: string): void;
  hasAttribute(name: string): boolean;
  /**
   * Returns a boolean value indicating whether the current element has any attributes or not.
   */
  hasAttributes(): boolean;
  /**
   * Returns the attribute names of the element as an Array of strings
   */
  getAttributeNames(): any[];
  getAttributeNode(name: string): any;
  setAttributeNode(newAttr: any): void;
  removeAttributeNode(oldAttr: any): void;
  click(): void;
  getElementsByClassName(name: string): NodeList;
  getElementsByTagName(name: string): NodeList;
  querySelector(selector: string): Element;
  querySelectorAll(selector: string): NodeList;
  /**
   * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
   * @example
   * // HTML
   * <style>
   *     div {
   *         width: 140px;
   *         height: 50px;
   *         display: flex;
   *         align-items: center;
   *         justify-content: center;
   *         background: #fbe;
   *         position: absolute;
   *     }
   * </style>
   * <div id="slider">SLIDE ME</div>
   *
   * // JS
   * function beginSliding(e) {
   *      slider.setPointerCapture(e.pointerId);
   *      slider.addEventListener("pointermove", slide);
   *  }
   *
   *  function stopSliding(e) {
   *      slider.releasePointerCapture(e.pointerId);
   *      slider.removeEventListener("pointermove", slide);
   *  }
   *
   *  function slide(e) {
   *      slider.style.left = e.clientX;
   *  }
   *
   *  const slider = document.getElementById("slider");
   *
   *  slider.addEventListener("pointerdown", beginSliding);
   *  slider.addEventListener("pointerup", stopSliding);
   * @param pointerId - The unique identifier of the pointer to be captured.
   */
  setPointerCapture(pointerId: number): void;
  /**
   * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
   * @param pointerId - The unique identifier of the pointer to be released.
   */
  releasePointerCapture(pointerId: number): void;
  /**
   * Checks if the element has pointer capture for the specified pointer.
   * @param pointerId - The unique identifier of the pointer to check.
   * @returns True if the element has pointer capture for the specified pointer, false otherwise.
   */
  hasPointerCapture(pointerId: number): boolean;
  getBoundingClientRect(): any;
  closest(selectorString: string): Element;
  matches(selectorString: string): boolean;
  innerHTML: any;
  outerHTML: string;
  /**
   * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
   */
  slot: string;
  /**
   * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
   */
  readonly assignedSlot: HTMLSlotElement;
  insertAdjacentHTML(position: any, value: string): void;
  insertAdjacentElement(position: any, node: any): Node;
  insertAdjacentText(position: any, text: any): void;
  readonly contentEditable: any;
  readonly isConnected: boolean;
  readonly parentNode: Node;
  readonly parentElement: Element;
  readonly firstChild: Node;
  readonly lastChild: Node;
  readonly previousSibling: Node;
  readonly nextSibling: Node;
  readonly firstElementChild: Node;
  readonly lastElementChild: Node;
  readonly previousElementSibling: Node;
  readonly nextElementSibling: Node;
  textContent: string;
  hasChildNodes(): boolean;
  readonly childNodes: NodeList;
  readonly children: HTMLCollection;
  readonly ownerDocument: any;
  cloneNode(deep: boolean): Node;
  appendChild(child: Node): Node;
  insertBefore(child: Node, before: Node): Node;
  replaceChild(newChild: Node, oldChild: Node): Node;
  removeChild(child: Node): Node;
  remove(): void;
  before(...nodes: Node[][]): void;
  after(...nodes: Node[][]): void;
  replaceWith(...nodes: Node[][]): void;
  contains(node: Node): void;
  /**
   * @returns root node
   */
  getRootNode(options: any): Node;
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}
declare type Style = any;
declare class HTMLCollection extends NodeList {
  item(index: number): Node;
  readonly length: number;
  keys(): void;
  values(): void;
  entries(): void;
  forEach(callback: any): void;
}

// TODO IntersectionObserver
// TODO IntersectionObserverEntry

/**
 * Creates an instance of NamedNodeMap.
 */
declare class NamedNodeMap {
  constructor(node: Node);
  getNamedItem(name: any): any;
  setNamedItem(attr: any): void;
  removeNamedItem(name: any): void;
  item(index: any): any;
  readonly length: number;
}

declare class Node extends EventTarget {
  readonly contentEditable: any;
  readonly isConnected: boolean;
  readonly parentNode: Node;
  readonly parentElement: Element;
  readonly firstChild: Node;
  readonly lastChild: Node;
  readonly previousSibling: Node;
  readonly nextSibling: Node;
  readonly firstElementChild: Node;
  readonly lastElementChild: Node;
  readonly previousElementSibling: Node;
  readonly nextElementSibling: Node;
  textContent: string;
  hasChildNodes(): boolean;
  readonly childNodes: NodeList;
  readonly children: HTMLCollection;
  readonly ownerDocument: any;
  readonly attributes: any;
  cloneNode(deep: boolean): Node;
  appendChild(child: Node): Node;
  insertBefore(child: Node, before: Node): Node;
  replaceChild(newChild: Node, oldChild: Node): Node;
  removeChild(child: Node): Node;
  remove(): void;
  before(...nodes: Node[][]): void;
  after(...nodes: Node[][]): void;
  replaceWith(...nodes: Node[][]): void;
  contains(node: Node): void;
  /**
   * @returns root node
   */
  getRootNode(options: any): Node;
  static ELEMENT_NODE: any;
  static ATTRIBUTE_NODE: any;
  static TEXT_NODE: any;
  static DOCUMENT_NODE: any;
  static DOCUMENT_FRAGMENT_NODE: any;
  static COMMENT_NODE: any;
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}

declare class NodeFilter {}

/**
 * Creates an instance of NodeList.
 */
declare class NodeList {
  constructor(staticList: any, updater: any);
  item(index: number): Node;
  readonly length: number;
  keys(): void;
  values(): void;
  entries(): void;
  forEach(callback: any): void;
}

/**
 * Creates an instance of Path2D.
 * @param path - `Optional` Path2D Object from another Path2D Instance
 */
declare class Path2D {
  constructor(path: Path2D);
  /**
   * Adds one Path2D object to another Path2D object.<br></br>
   * @param path - A Path2D object to add.
   */
  addPath(path: Path2D): void;
  /**
   * Add a straight line from the current point to the start of the current sub-path.
   */
  closePath(): void;
  /**
   * Begins a new sub-path at the point specified by the given (x, y) coordinates.
   * @param x - The x-axis (horizontal) coordinate of the point.
   * @param y - The y-axis (vertical) coordinate of the point.
   */
  moveTo(x: number, y: number): void;
  /**
   * Adds a straight line to the current sub-path by connecting the sub-path's
   * last point to the specified (x, y) coordinates.
   * @param x - The x-axis coordinate of the line's end point.
   * @param y - The y-axis coordinate of the line's end point.
   */
  lineTo(x: number, y: number): void;
  /**
   * Adds a cubic Bézier curve to the current sub-path.
   * @param cp1x - The x-axis coordinate of the first control point.
   * @param cp1y - The y-axis coordinate of the first control point.
   * @param cp2x - The x-axis coordinate of the second control point.
   * @param cp2y - The y-axis coordinate of the second control point.
   * @param x - The x-axis coordinate of the end point.
   * @param y - The y-axis coordinate of the end point.
   */
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ): void;
  /**
   * Adds a quadratic Bézier curve to the current sub-path.
   * @param cpx - The x-axis coordinate of the control point.
   * @param cpy - The y-axis coordinate of the control point.
   * @param x - The x-axis coordinate of the end point.
   * @param y - The y-axis coordinate of the end point.
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  /**
   * Adds a circular arc to the current sub-path.
   * @param x - The horizontal coordinate of the arc's center.
   * @param y - The vertical coordinate of the arc's center.
   * @param radius - The arc's radius. Must be positive.
   * @param startAngle - The angle at which the arc starts in radians,
   * measured from the positive x-axis.
   * @param endAngle - The angle at which the arc ends in radians,
   * measured from the positive x-axis.
   * @param counterclockwise - An optional boolean value. If true,
   * draws the arc counter-clockwise between the start and end angles.
   * The default is false (clockwise).
   */
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise: boolean
  ): void;
  /**
   * Adds a circular arc to the current sub-path, using the given control points and radius.
   * @param x1 - The x-axis coordinate of the first control point.
   * @param y1 - The y-axis coordinate of the first control point.
   * @param x2 - The x-axis coordinate of the second control point.
   * @param y2 - The y-axis coordinate of the second control point.
   * @param radius - The arc's radius. Must be non-negative.
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  /**
   * Adds a rectangle to the current path.
   * @param x - The x-axis coordinate of the rectangle's starting point.
   * @param y - The y-axis coordinate of the rectangle's starting point.
   * @param width - The rectangle's width.
   * @param height - The rectangle's height.
   */
  rect(x: number, y: number, width: number, height: number): void;
}

// TODO ResizeObserver
// TODO ResizeObserverEntry
// TODO ResizeObserverSize

/**
 * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
 */
declare class ShadowRoot {
  /**
   * Returns the mode of the ShadowRoot — either open or closed. This defines whether or not the shadow root's internal features are accessible from JavaScript.
   */
  readonly mode: Element;
  /**
   * Returns a reference to the DOM element the ShadowRoot is attached to.
   */
  readonly host: Element;
  /**
   * Returns a reference to the DOM tree inside the ShadowRoot
   */
  innerHTML: string;
  /**
   * Returns the element within the shadow tree that has focus
   */
  readonly activeElement: Element;
  /**
   * Duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not
   * @param deep - Optional param to clone whole sub tree(True) or only node (False)
   */
  cloneNode(deep: boolean): void;
}

/**
 * Creates an instance of Text.
 */
declare class Text extends CharacterData {
  constructor(document: any, textContent: any);
  readonly nodeName: string;
  readonly nodeType: number;
  nodeValue: string;
  data: string;
  textContent: string;
  readonly length: number;
  substringData(offset: any, count: any): string;
  appendData(arg: string): void;
  insertData(offset: number, arg: string): void;
  deleteData(offset: number, count: number): void;
  replaceData(offset: number, count: number, arg: string): void;
  readonly contentEditable: any;
  readonly isConnected: boolean;
  readonly parentNode: Node;
  readonly parentElement: Element;
  readonly firstChild: Node;
  readonly lastChild: Node;
  readonly previousSibling: Node;
  readonly nextSibling: Node;
  readonly firstElementChild: Node;
  readonly lastElementChild: Node;
  readonly previousElementSibling: Node;
  readonly nextElementSibling: Node;
  hasChildNodes(): boolean;
  readonly childNodes: NodeList;
  readonly children: HTMLCollection;
  readonly ownerDocument: any;
  readonly attributes: any;
  cloneNode(deep: boolean): Node;
  appendChild(child: Node): Node;
  insertBefore(child: Node, before: Node): Node;
  replaceChild(newChild: Node, oldChild: Node): Node;
  removeChild(child: Node): Node;
  remove(): void;
  before(...nodes: Node[][]): void;
  after(...nodes: Node[][]): void;
  replaceWith(...nodes: Node[][]): void;
  contains(node: Node): void;
  /**
   * @returns root node
   */
  getRootNode(options: any): Node;
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}

/**
 * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
 */
declare class TreeWalker {
  readonly root: Node;
  readonly whatToShow: number;
  readonly filter: NodeFilter;
  parentNode(): Node | null;
  firstChild(): Node | null;
  lastChild(): Node | null;
  previousSibling(): Node | null;
  nextSibling(): Node | null;
  previousNode(): Node | null;
  nextNode(): Node | null;
}

declare interface CSSRule {}
declare var CSSRule: {
  prototype: CSSRule;
  new (): CSSRule;
  readonly STYLE_RULE: 1;
  readonly CHARSET_RULE: 2;
  readonly IMPORT_RULE: 3;
  readonly MEDIA_RULE: 4;
  readonly FONT_FACE_RULE: 5;
  readonly PAGE_RULE: 6;
  readonly NAMESPACE_RULE: 10;
  readonly KEYFRAMES_RULE: 7;
  readonly KEYFRAME_RULE: 8;
  readonly SUPPORTS_RULE: 12;
  readonly COUNTER_STYLE_RULE: 11;
  readonly FONT_FEATURE_VALUES_RULE: 14;
};

/**
 * An object that is a CSS declaration block, and exposes style information and various style-related methods and properties.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)
 */
interface CSSStyleDeclaration {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/accent-color) */
  accentColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content) */
  alignContent: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items) */
  alignItems: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self) */
  alignSelf: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/alignment-baseline) */
  alignmentBaseline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/all) */
  all: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation) */
  animation: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-composition) */
  animationComposition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay) */
  animationDelay: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction) */
  animationDirection: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration) */
  animationDuration: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode) */
  animationFillMode: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count) */
  animationIterationCount: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name) */
  animationName: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state) */
  animationPlayState: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function) */
  animationTimingFunction: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance) */
  appearance: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio) */
  aspectRatio: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) */
  backdropFilter: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility) */
  backfaceVisibility: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background) */
  background: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment) */
  backgroundAttachment: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode) */
  backgroundBlendMode: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip) */
  backgroundClip: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color) */
  backgroundColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image) */
  backgroundImage: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin) */
  backgroundOrigin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position) */
  backgroundPosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x) */
  backgroundPositionX: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y) */
  backgroundPositionY: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat) */
  backgroundRepeat: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size) */
  backgroundSize: string;
  baselineShift: string;
  baselineSource: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size) */
  blockSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border) */
  border: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block) */
  borderBlock: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color) */
  borderBlockColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end) */
  borderBlockEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color) */
  borderBlockEndColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style) */
  borderBlockEndStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width) */
  borderBlockEndWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start) */
  borderBlockStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color) */
  borderBlockStartColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style) */
  borderBlockStartStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width) */
  borderBlockStartWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style) */
  borderBlockStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width) */
  borderBlockWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom) */
  borderBottom: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color) */
  borderBottomColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius) */
  borderBottomLeftRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius) */
  borderBottomRightRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style) */
  borderBottomStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width) */
  borderBottomWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse) */
  borderCollapse: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color) */
  borderColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius) */
  borderEndEndRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius) */
  borderEndStartRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image) */
  borderImage: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset) */
  borderImageOutset: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat) */
  borderImageRepeat: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice) */
  borderImageSlice: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source) */
  borderImageSource: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width) */
  borderImageWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline) */
  borderInline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color) */
  borderInlineColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end) */
  borderInlineEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color) */
  borderInlineEndColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style) */
  borderInlineEndStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width) */
  borderInlineEndWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start) */
  borderInlineStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color) */
  borderInlineStartColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style) */
  borderInlineStartStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width) */
  borderInlineStartWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style) */
  borderInlineStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width) */
  borderInlineWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left) */
  borderLeft: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color) */
  borderLeftColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style) */
  borderLeftStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width) */
  borderLeftWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius) */
  borderRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right) */
  borderRight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color) */
  borderRightColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style) */
  borderRightStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width) */
  borderRightWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing) */
  borderSpacing: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius) */
  borderStartEndRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius) */
  borderStartStartRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style) */
  borderStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top) */
  borderTop: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color) */
  borderTopColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius) */
  borderTopLeftRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius) */
  borderTopRightRadius: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style) */
  borderTopStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width) */
  borderTopWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width) */
  borderWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/bottom) */
  bottom: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-decoration-break) */
  boxDecorationBreak: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow) */
  boxShadow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing) */
  boxSizing: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-after) */
  breakAfter: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-before) */
  breakBefore: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-inside) */
  breakInside: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side) */
  captionSide: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color) */
  caretColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clear) */
  clear: string;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip)
   */
  clip: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path) */
  clipPath: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-rule) */
  clipRule: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color) */
  color: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-interpolation) */
  colorInterpolation: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-interpolation-filters) */
  colorInterpolationFilters: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-scheme) */
  colorScheme: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count) */
  columnCount: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill) */
  columnFill: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-gap) */
  columnGap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule) */
  columnRule: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color) */
  columnRuleColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style) */
  columnRuleStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width) */
  columnRuleWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span) */
  columnSpan: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width) */
  columnWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/columns) */
  columns: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain) */
  contain: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-block-size) */
  containIntrinsicBlockSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height) */
  containIntrinsicHeight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-inline-size) */
  containIntrinsicInlineSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size) */
  containIntrinsicSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width) */
  containIntrinsicWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container) */
  container: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-name) */
  containerName: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-type) */
  containerType: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content) */
  content: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content-visibility) */
  contentVisibility: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment) */
  counterIncrement: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset) */
  counterReset: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set) */
  counterSet: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssFloat) */
  cssFloat: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssText) */
  cssText: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cursor) */
  cursor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cx) */
  cx: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cy) */
  cy: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/d) */
  d: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/direction) */
  direction: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/display) */
  display: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/dominant-baseline) */
  dominantBaseline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells) */
  emptyCells: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/fill) */
  fill: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/fill-opacity) */
  fillOpacity: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/fill-rule) */
  fillRule: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter) */
  filter: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex) */
  flex: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis) */
  flexBasis: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction) */
  flexDirection: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow) */
  flexFlow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow) */
  flexGrow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink) */
  flexShrink: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap) */
  flexWrap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/float) */
  float: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flood-color) */
  floodColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flood-opacity) */
  floodOpacity: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font) */
  font: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family) */
  fontFamily: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings) */
  fontFeatureSettings: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning) */
  fontKerning: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing) */
  fontOpticalSizing: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-palette) */
  fontPalette: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size) */
  fontSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust) */
  fontSizeAdjust: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch) */
  fontStretch: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style) */
  fontStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis) */
  fontSynthesis: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps) */
  fontSynthesisSmallCaps: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style) */
  fontSynthesisStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight) */
  fontSynthesisWeight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant) */
  fontVariant: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates) */
  fontVariantAlternates: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps) */
  fontVariantCaps: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian) */
  fontVariantEastAsian: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) */
  fontVariantLigatures: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric) */
  fontVariantNumeric: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position) */
  fontVariantPosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) */
  fontVariationSettings: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight) */
  fontWeight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust) */
  forcedColorAdjust: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/gap) */
  gap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid) */
  grid: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area) */
  gridArea: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns) */
  gridAutoColumns: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow) */
  gridAutoFlow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows) */
  gridAutoRows: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column) */
  gridColumn: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) */
  gridColumnEnd: string;
  /** @deprecated This is a legacy alias of `columnGap`. */
  gridColumnGap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) */
  gridColumnStart: string;
  /** @deprecated This is a legacy alias of `gap`. */
  gridGap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row) */
  gridRow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) */
  gridRowEnd: string;
  /** @deprecated This is a legacy alias of `rowGap`. */
  gridRowGap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) */
  gridRowStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template) */
  gridTemplate: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas) */
  gridTemplateAreas: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns) */
  gridTemplateColumns: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) */
  gridTemplateRows: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/height) */
  height: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-character) */
  hyphenateCharacter: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphens) */
  hyphens: string;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
   */
  imageOrientation: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering) */
  imageRendering: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size) */
  inlineSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset) */
  inset: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block) */
  insetBlock: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end) */
  insetBlockEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start) */
  insetBlockStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline) */
  insetInline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end) */
  insetInlineEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start) */
  insetInlineStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/isolation) */
  isolation: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content) */
  justifyContent: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-items) */
  justifyItems: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-self) */
  justifySelf: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/left) */
  left: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/length) */
  readonly length: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing) */
  letterSpacing: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/lighting-color) */
  lightingColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break) */
  lineBreak: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height) */
  lineHeight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style) */
  listStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image) */
  listStyleImage: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position) */
  listStylePosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type) */
  listStyleType: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin) */
  margin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block) */
  marginBlock: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end) */
  marginBlockEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start) */
  marginBlockStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom) */
  marginBottom: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline) */
  marginInline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end) */
  marginInlineEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start) */
  marginInlineStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left) */
  marginLeft: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right) */
  marginRight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top) */
  marginTop: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker) */
  marker: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker-end) */
  markerEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker-mid) */
  markerMid: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/marker-start) */
  markerStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask) */
  mask: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip) */
  maskClip: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite) */
  maskComposite: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image) */
  maskImage: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode) */
  maskMode: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin) */
  maskOrigin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position) */
  maskPosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat) */
  maskRepeat: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size) */
  maskSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type) */
  maskType: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/math-depth) */
  mathDepth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/math-style) */
  mathStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size) */
  maxBlockSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height) */
  maxHeight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size) */
  maxInlineSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width) */
  maxWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size) */
  minBlockSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height) */
  minHeight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size) */
  minInlineSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width) */
  minWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode) */
  mixBlendMode: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit) */
  objectFit: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position) */
  objectPosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset) */
  offset: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-anchor) */
  offsetAnchor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance) */
  offsetDistance: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path) */
  offsetPath: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-position) */
  offsetPosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate) */
  offsetRotate: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity) */
  opacity: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order) */
  order: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/orphans) */
  orphans: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline) */
  outline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color) */
  outlineColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset) */
  outlineOffset: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style) */
  outlineStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width) */
  outlineWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow) */
  overflow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor) */
  overflowAnchor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin) */
  overflowClipMargin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap) */
  overflowWrap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x) */
  overflowX: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y) */
  overflowY: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) */
  overscrollBehavior: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block) */
  overscrollBehaviorBlock: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline) */
  overscrollBehaviorInline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x) */
  overscrollBehaviorX: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y) */
  overscrollBehaviorY: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding) */
  padding: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block) */
  paddingBlock: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end) */
  paddingBlockEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start) */
  paddingBlockStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom) */
  paddingBottom: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline) */
  paddingInline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end) */
  paddingInlineEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start) */
  paddingInlineStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left) */
  paddingLeft: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right) */
  paddingRight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top) */
  paddingTop: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page) */
  page: string;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after)
   */
  pageBreakAfter: string;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before)
   */
  pageBreakBefore: string;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside)
   */
  pageBreakInside: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order) */
  paintOrder: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/parentRule) */
  readonly parentRule: CSSRule | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective) */
  perspective: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin) */
  perspectiveOrigin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-content) */
  placeContent: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-items) */
  placeItems: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-self) */
  placeSelf: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events) */
  pointerEvents: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/position) */
  position: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/print-color-adjust) */
  printColorAdjust: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/quotes) */
  quotes: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/r) */
  r: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/resize) */
  resize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/right) */
  right: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rotate) */
  rotate: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/row-gap) */
  rowGap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-align) */
  rubyAlign: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position) */
  rubyPosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rx) */
  rx: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ry) */
  ry: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scale) */
  scale: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior) */
  scrollBehavior: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin) */
  scrollMargin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block) */
  scrollMarginBlock: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end) */
  scrollMarginBlockEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start) */
  scrollMarginBlockStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom) */
  scrollMarginBottom: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline) */
  scrollMarginInline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end) */
  scrollMarginInlineEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start) */
  scrollMarginInlineStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left) */
  scrollMarginLeft: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right) */
  scrollMarginRight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top) */
  scrollMarginTop: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding) */
  scrollPadding: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block) */
  scrollPaddingBlock: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end) */
  scrollPaddingBlockEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start) */
  scrollPaddingBlockStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom) */
  scrollPaddingBottom: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline) */
  scrollPaddingInline: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end) */
  scrollPaddingInlineEnd: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start) */
  scrollPaddingInlineStart: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left) */
  scrollPaddingLeft: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right) */
  scrollPaddingRight: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top) */
  scrollPaddingTop: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) */
  scrollSnapAlign: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) */
  scrollSnapStop: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) */
  scrollSnapType: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-color) */
  scrollbarColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter) */
  scrollbarGutter: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-width) */
  scrollbarWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold) */
  shapeImageThreshold: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin) */
  shapeMargin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside) */
  shapeOutside: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-rendering) */
  shapeRendering: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stop-color) */
  stopColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stop-opacity) */
  stopOpacity: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke) */
  stroke: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-dasharray) */
  strokeDasharray: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-dashoffset) */
  strokeDashoffset: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-linecap) */
  strokeLinecap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-linejoin) */
  strokeLinejoin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-miterlimit) */
  strokeMiterlimit: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-opacity) */
  strokeOpacity: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/stroke-width) */
  strokeWidth: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size) */
  tabSize: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout) */
  tableLayout: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align) */
  textAlign: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last) */
  textAlignLast: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-anchor) */
  textAnchor: string;
  textBox: string;
  textBoxEdge: string;
  textBoxTrim: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright) */
  textCombineUpright: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration) */
  textDecoration: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color) */
  textDecorationColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line) */
  textDecorationLine: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink) */
  textDecorationSkipInk: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style) */
  textDecorationStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness) */
  textDecorationThickness: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis) */
  textEmphasis: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color) */
  textEmphasisColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position) */
  textEmphasisPosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style) */
  textEmphasisStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent) */
  textIndent: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation) */
  textOrientation: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow) */
  textOverflow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering) */
  textRendering: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow) */
  textShadow: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform) */
  textTransform: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset) */
  textUnderlineOffset: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position) */
  textUnderlinePosition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-wrap) */
  textWrap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-wrap-mode) */
  textWrapMode: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-wrap-style) */
  textWrapStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/top) */
  top: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action) */
  touchAction: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform) */
  transform: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box) */
  transformBox: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin) */
  transformOrigin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style) */
  transformStyle: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition) */
  transition: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-behavior) */
  transitionBehavior: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay) */
  transitionDelay: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration) */
  transitionDuration: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property) */
  transitionProperty: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function) */
  transitionTimingFunction: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/translate) */
  translate: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi) */
  unicodeBidi: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select) */
  userSelect: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vector-effect) */
  vectorEffect: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align) */
  verticalAlign: string;
  viewTransitionClass: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/view-transition-name) */
  viewTransitionName: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/visibility) */
  visibility: string;
  /**
   * @deprecated This is a legacy alias of `alignContent`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content)
   */
  webkitAlignContent: string;
  /**
   * @deprecated This is a legacy alias of `alignItems`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items)
   */
  webkitAlignItems: string;
  /**
   * @deprecated This is a legacy alias of `alignSelf`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self)
   */
  webkitAlignSelf: string;
  /**
   * @deprecated This is a legacy alias of `animation`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation)
   */
  webkitAnimation: string;
  /**
   * @deprecated This is a legacy alias of `animationDelay`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
   */
  webkitAnimationDelay: string;
  /**
   * @deprecated This is a legacy alias of `animationDirection`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
   */
  webkitAnimationDirection: string;
  /**
   * @deprecated This is a legacy alias of `animationDuration`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
   */
  webkitAnimationDuration: string;
  /**
   * @deprecated This is a legacy alias of `animationFillMode`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
   */
  webkitAnimationFillMode: string;
  /**
   * @deprecated This is a legacy alias of `animationIterationCount`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
   */
  webkitAnimationIterationCount: string;
  /**
   * @deprecated This is a legacy alias of `animationName`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
   */
  webkitAnimationName: string;
  /**
   * @deprecated This is a legacy alias of `animationPlayState`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
   */
  webkitAnimationPlayState: string;
  /**
   * @deprecated This is a legacy alias of `animationTimingFunction`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
   */
  webkitAnimationTimingFunction: string;
  /**
   * @deprecated This is a legacy alias of `appearance`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
   */
  webkitAppearance: string;
  /**
   * @deprecated This is a legacy alias of `backfaceVisibility`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
   */
  webkitBackfaceVisibility: string;
  /**
   * @deprecated This is a legacy alias of `backgroundClip`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
   */
  webkitBackgroundClip: string;
  /**
   * @deprecated This is a legacy alias of `backgroundOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
   */
  webkitBackgroundOrigin: string;
  /**
   * @deprecated This is a legacy alias of `backgroundSize`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
   */
  webkitBackgroundSize: string;
  /**
   * @deprecated This is a legacy alias of `borderBottomLeftRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
   */
  webkitBorderBottomLeftRadius: string;
  /**
   * @deprecated This is a legacy alias of `borderBottomRightRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
   */
  webkitBorderBottomRightRadius: string;
  /**
   * @deprecated This is a legacy alias of `borderRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
   */
  webkitBorderRadius: string;
  /**
   * @deprecated This is a legacy alias of `borderTopLeftRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
   */
  webkitBorderTopLeftRadius: string;
  /**
   * @deprecated This is a legacy alias of `borderTopRightRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
   */
  webkitBorderTopRightRadius: string;
  /**
   * @deprecated This is a legacy alias of `boxAlign`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
   */
  webkitBoxAlign: string;
  /**
   * @deprecated This is a legacy alias of `boxFlex`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
   */
  webkitBoxFlex: string;
  /**
   * @deprecated This is a legacy alias of `boxOrdinalGroup`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
   */
  webkitBoxOrdinalGroup: string;
  /**
   * @deprecated This is a legacy alias of `boxOrient`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
   */
  webkitBoxOrient: string;
  /**
   * @deprecated This is a legacy alias of `boxPack`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
   */
  webkitBoxPack: string;
  /**
   * @deprecated This is a legacy alias of `boxShadow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
   */
  webkitBoxShadow: string;
  /**
   * @deprecated This is a legacy alias of `boxSizing`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
   */
  webkitBoxSizing: string;
  /**
   * @deprecated This is a legacy alias of `filter`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter)
   */
  webkitFilter: string;
  /**
   * @deprecated This is a legacy alias of `flex`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex)
   */
  webkitFlex: string;
  /**
   * @deprecated This is a legacy alias of `flexBasis`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
   */
  webkitFlexBasis: string;
  /**
   * @deprecated This is a legacy alias of `flexDirection`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  webkitFlexDirection: string;
  /**
   * @deprecated This is a legacy alias of `flexFlow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  webkitFlexFlow: string;
  /**
   * @deprecated This is a legacy alias of `flexGrow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
   */
  webkitFlexGrow: string;
  /**
   * @deprecated This is a legacy alias of `flexShrink`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
   */
  webkitFlexShrink: string;
  /**
   * @deprecated This is a legacy alias of `flexWrap`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
   */
  webkitFlexWrap: string;
  /**
   * @deprecated This is a legacy alias of `justifyContent`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content)
   */
  webkitJustifyContent: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp) */
  webkitLineClamp: string;
  /**
   * @deprecated This is a legacy alias of `mask`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask)
   */
  webkitMask: string;
  /**
   * @deprecated This is a legacy alias of `maskBorder`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border)
   */
  webkitMaskBoxImage: string;
  /**
   * @deprecated This is a legacy alias of `maskBorderOutset`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-outset)
   */
  webkitMaskBoxImageOutset: string;
  /**
   * @deprecated This is a legacy alias of `maskBorderRepeat`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat)
   */
  webkitMaskBoxImageRepeat: string;
  /**
   * @deprecated This is a legacy alias of `maskBorderSlice`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-slice)
   */
  webkitMaskBoxImageSlice: string;
  /**
   * @deprecated This is a legacy alias of `maskBorderSource`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-source)
   */
  webkitMaskBoxImageSource: string;
  /**
   * @deprecated This is a legacy alias of `maskBorderWidth`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-width)
   */
  webkitMaskBoxImageWidth: string;
  /**
   * @deprecated This is a legacy alias of `maskClip`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
   */
  webkitMaskClip: string;
  /**
   * @deprecated This is a legacy alias of `maskComposite`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite)
   */
  webkitMaskComposite: string;
  /**
   * @deprecated This is a legacy alias of `maskImage`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
   */
  webkitMaskImage: string;
  /**
   * @deprecated This is a legacy alias of `maskOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
   */
  webkitMaskOrigin: string;
  /**
   * @deprecated This is a legacy alias of `maskPosition`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
   */
  webkitMaskPosition: string;
  /**
   * @deprecated This is a legacy alias of `maskRepeat`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
   */
  webkitMaskRepeat: string;
  /**
   * @deprecated This is a legacy alias of `maskSize`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
   */
  webkitMaskSize: string;
  /**
   * @deprecated This is a legacy alias of `order`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order)
   */
  webkitOrder: string;
  /**
   * @deprecated This is a legacy alias of `perspective`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
   */
  webkitPerspective: string;
  /**
   * @deprecated This is a legacy alias of `perspectiveOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
   */
  webkitPerspectiveOrigin: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color) */
  webkitTextFillColor: string;
  /**
   * @deprecated This is a legacy alias of `textSizeAdjust`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
   */
  webkitTextSizeAdjust: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke) */
  webkitTextStroke: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color) */
  webkitTextStrokeColor: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width) */
  webkitTextStrokeWidth: string;
  /**
   * @deprecated This is a legacy alias of `transform`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform)
   */
  webkitTransform: string;
  /**
   * @deprecated This is a legacy alias of `transformOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
   */
  webkitTransformOrigin: string;
  /**
   * @deprecated This is a legacy alias of `transformStyle`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
   */
  webkitTransformStyle: string;
  /**
   * @deprecated This is a legacy alias of `transition`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition)
   */
  webkitTransition: string;
  /**
   * @deprecated This is a legacy alias of `transitionDelay`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
   */
  webkitTransitionDelay: string;
  /**
   * @deprecated This is a legacy alias of `transitionDuration`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
   */
  webkitTransitionDuration: string;
  /**
   * @deprecated This is a legacy alias of `transitionProperty`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
   */
  webkitTransitionProperty: string;
  /**
   * @deprecated This is a legacy alias of `transitionTimingFunction`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
   */
  webkitTransitionTimingFunction: string;
  /**
   * @deprecated This is a legacy alias of `userSelect`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
   */
  webkitUserSelect: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space) */
  whiteSpace: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space-collapse) */
  whiteSpaceCollapse: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/widows) */
  widows: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/width) */
  width: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change) */
  willChange: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break) */
  wordBreak: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing) */
  wordSpacing: string;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
   */
  wordWrap: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode) */
  writingMode: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/x) */
  x: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/y) */
  y: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index) */
  zIndex: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/zoom) */
  zoom: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) */
  getPropertyPriority(property: string): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/getPropertyValue) */
  getPropertyValue(property: string): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/item) */
  item(index: number): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/removeProperty) */
  removeProperty(property: string): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/setProperty) */
  setProperty(property: string, value: string | null, priority?: string): void;
  [index: number]: string;
}

declare function getComputedStyle(
  element: Element,
  pseudoElement?: string
): CSSStyleDeclaration;
