declare class HTMLAnchorElement extends HTMLElement {
  /**
   * The `href` value for the anchor
   */
  href: string;
  /**
   * The path portion of the anchor's `href`
   */
  readonly pathname: string;
  /**
   * The protocol portion of the anchor's `href`.
   */
  readonly protocol: string;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLBodyElement extends HTMLElement {
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLButtonElement extends HTMLElement {
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLCanvasElement {
  /**
   * Creates a 2D drawing context on the canvas.
   * <br></br> Note: Only '2d' context is supported.
   * @example
   * // 1. Provide the canvas tag in your HTML document.
   *   <sp-body id="layers">
   *     <canvas id="canvas" height="230" width="1500"></canvas>
   *   </sp-body>
   *   <footer>
   *   <!-- Button Events to invoke height, width and context of canvas -->
   *     <sp-button id="btnPopulateLoadScript" onclick="show_height()">Canvas Height</sp-button>
   *     <sp-button id="btnPopulateLoadScript" onclick="show_width()">Canvas Width</sp-button>
   *     <sp-button id="btnPopulateLoadScript" onclick="getContext()">Get Context</sp-button>
   *   </footer>
   * // 2. You can now get the width, height and context using JavaScript under <script> tag, as shown below.
   * <script>
   *   const canvas = document.getElementById("canvas");
   *
   *   function show_height() {
   *     console.log("Canvas Height: "+ canvas.height);
   *   }
   *
   *   function show_width() {
   *     console.log("Canvas Width: "+ canvas.width);
   *   }
   *
   *   // Function to get the canvas context and draw a triangle using lines
   *   function getContext() {
   *      let context = canvas.getContext("2d"); // get's the canvas context
   *
   *      // Draw a triangle. For more details on the below apis refer to interfaces such as CanvasRenderingContext2D, CanvasGradient. The details of the interfaces are shared as a link at the top of this documentation
   *      context.beginPath();
   *      context.moveTo(50,50);
   *      context.lineTo(100, 50);
   *      context.lineTo(100, 100);
   *      context.lineTo(50,50)
   *      context.closePath();
   *      context.stroke();
   *   }
   * </script>
   * @param contextType - A string containing the context identifier defining the drawing context associated to the canvas. Supports only '2d'.
   * @returns A 2D rendering context (CanvasRenderingContext2D) object.
   */
  getContext(contextType: string): CanvasRenderingContext2D;
  /**
   * Get the height of the canvas element.
   */
  height: number;
  /**
   * Get the width of the canvas element.
   */
  width: number;
}
declare class HTMLDialogElement extends HTMLElement {
  /**
   * Show the non modal dialog.
   * @param [options = {}] - Options for the show.
   * @param [options.anchorOffset] - Offset from the anchor for the initial positioning of the dialog.
   * @param [options.anchorOffset.top] - Top offset from the anchor for the initial positioning of the dialog.
   * @param [options.anchorOffset.left] - Left offset from the anchor for the initial positioning of the dialog.
   */
  show(options?: {
    anchorOffset?: {
      top?: number;
      left?: number;
    };
  }): void;
  readonly open: boolean;
  readonly isMinimized: boolean;
  returnValue: any;
  /**
   * Show the modal dialog.
   * @returns A promise that resolves when the dialog is closed (**NSC**)
   *                    after calling the close() method or clicking the "submit" button.
   *                    The promise will be resolved with returnValue as a parameter.
   *                    The promise can be rejected if the dialog was closed for other reasons
   *                    e.g. the user hit escape or closed the window, or if the application
   *                    does not allow showing the dialog. The error parameter will give more details.
   *                    error.code will be one of the values from HTMLDialogElement.rejectionReasons.
   */
  showModal(): Promise<any>;
  /**
   * Closes the dialog; setting the return value (optional)
   */
  close(returnValue?: any): void;
  /**
   * When the promise returned from openDialog() is rejected, error.code can be equal to this value,
   * which means that the application does not allow showing dialogs (e.g. only one dialog is allowed).
   */
  REJECTION_REASON_NOT_ALLOWED: any;
  /**
   * When the promise returned from openDialog() is rejected, error.code can be equal to this value,
   * which means that the node has been detached from DOM tree.
   */
  REJECTION_REASON_DETACHED: any;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLElement extends Element {
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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

  /**
   * Inserts a set of Node objects or string objects after the last child of the Element.
   */
  append(...nodes: (Node | string)[]): void;

  /**
   * Inserts a set of Node objects or string objects before the first child of the Element.
   */
  prepend(...nodes: (Node | string)[]): void;


  /**
   * Replaces the existing children of a Node with a specified new set of children. These can be string or Node objects.
   */
  replaceChildren(...nodes: (Node | string)[]): void;

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
declare class HTMLHeadElement extends HTMLElement {
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLHtmlElement extends HTMLElement {
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLImageElement extends HTMLElement {
  /**
   * The source of the image
   */
  src: string | File;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare type File = any;
declare class HTMLInputElement extends HTMLElement {
  /**
   * Returns the value of the input element.
   */
  value: any;
  /**
   * The defaultValue for the input element (if applicable to the input element's type)
   */
  defaultValue: string;
  /**
   * Indicates if the checkbox is checked.
   */
  checked: boolean;
  /**
   * Indicates if the element is indeterminate
   */
  indeterminate: boolean;
  /**
   * Specifies the name of this input element.
   */
  name: string;
  /**
   * Specifies the type of input control
   */
  type: string;
  /**
   * The placeholder for the input element (if applicable to the input element's type)
   */
  placeholder: string;
  /**
   * Determines if the element's content is read only.
   */
  readOnly: boolean;
  /**
   * Minimum value allowed (used for `input type="range"`)
   */
  min: string;
  /**
   * Maximum value allowed (used for `input type="range"`)
   */
  max: string;
  /**
   * the size of each movement of the slder control (used for `input type="range"`)
   */
  step: string;
  /**
   * Controls the type of native widget.
   */
  uxpVariant: string;
  /**
   * Determines if a control is rendered in "quiet" mode
   */
  uxpQuiet: string;
  /**
   * Returns/Sets the beginning index of the selected text. When nothing is selected,
   * this returns the position of the text input cursor (caret) inside of the `<input>` element.
   * Apply only to elements with type text/password/search/tel/url/week/month
   */
  selectionStart: number;
  /**
   * Returns/Sets the end index of the selected text. When there's no selection,
   * this returns the offset of the character immediately following the current text input cursor position.
   * Apply only to elements with type text/password/search/tel/url/week/month
   */
  selectionEnd: number;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLLabelElement extends HTMLElement {
  readonly control: HTMLElement;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLLinkElement extends HTMLElement {
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLMenuElement extends HTMLElement {
  /**
   * Render the menu at the `x`,`y` coordinates
   */
  popupAt(x: number, y: number): void;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLMenuItemElement extends HTMLElement {
  /**
   * Indicates if the menu item is checked.
   */
  checked: boolean;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLOptionElement extends HTMLElement {
  value: string;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLProgressElement extends HTMLElement {
  /**
   * Maximum value for the progress bar
   */
  max: number;
  /**
   * Value of the progress bar
   */
  value: number;
  /**
   * Completion value of the progress bar
   */
  readonly position: number;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLScriptElement extends HTMLElement {
  type: string;
  src: string;
  charset: string;
  text: string;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLSelectElement extends HTMLElement {
  value: string;
  selectedIndex: number;
  selectedOptions: Node[];
  /**
   * Variant
   */
  uxpVariant: string;
  /**
   * Determines if control renders quietly
   */
  uxpQuiet: string;
  readonly options: NodeList;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLSlotElement {
  /**
   * A string used to get and set slot's name.
   */
  name: string;
  /**
   * returns a sequence of the nodes assigned to this slot. If options object is used with flatten: "true",
   * If slottables is the empty list, then append each slottable child of slot, in tree order, to slottables.<br></br>
   * Refer [find-flattened-slotables](https://dom.spec.whatwg.org/#find-flattened-slotables)
   * @property options.flatten - A boolean value indicating whether to return the assigned nodes of any available child `slot` elements (true) or not (false). Defaults to false.
   * @param options - An object that sets options for the nodes to be returned
   * @returns An array of nodes
   */
  assignedNodes(options: any): any[];
  /**
   * returns a sequence of the elements assigned to this slot. If options object is used with flatten: "true",
   * If slottables is the empty list, then append each slottable child of slot, in tree order, to slottables.<br></br>
   * Refer [find-flattened-slotables](https://dom.spec.whatwg.org/#find-flattened-slotables)
   * @property options.flatten - A boolean value indicating whether to return the assigned elements of any available child `<slot>` elements (true) or not (false). Defaults to false
   * @param options - An object that sets options for the elements to be returned
   * @returns An array of elements
   */
  assignedElements(options: any): any[];
}
declare class HTMLStyleElement extends HTMLElement {
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
/**
 * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
 */
declare class HTMLTemplateElement extends HTMLElement {
  /**
   * Returns a template element's template content. return type is DocumentFragment object.
   */
  readonly content: DocumentFragment;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
declare class HTMLTextAreaElement extends HTMLElement {
  value: string;
  /**
   * Override implementation in base class Element
   */
  innerHTML: string;
  /**
   * The defaultValue for the textarea element
   */
  defaultValue: string;
  placeholder: string;
  readOnly: boolean;
  /**
   * Returns/Sets the beginning index of the selected text. When nothing is selected,
   * this returns the position of the text input cursor (caret) inside of the `<textarea>` element.
   */
  selectionStart: number;
  /**
   * Returns/Sets the end index of the selected text. When there's no selection,
   * this returns the offset of the character immediately following the current text input cursor position.
   */
  selectionEnd: number;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
/**
 * @property preload - Determines how much the media data be loaded when the plugin loads.
 *      This can be one of the followings. Default is "metadata".
 *      <ul>
 *          <li>'none': Video should not be loaded</li>
 *          <li>'metadata': Only video metadata is fetched</li>
 *          <li>'auto': The whole video file can be downloaded</li>
 *          <li>''(empty string): Synonym of the 'auto' value</li>
 *      </ul>
 *      example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" preload="metadata"></video>`
 * @property autoplay - Video automatically begins to play back as soon as loading the data.
 *      example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoplay></video>`
 */
declare class HTMLVideoElement extends HTMLElement {
  /**
   * URL of a media resource.
   */
  src: string;
  /**
   * Current playback time in seconds.
   */
  currentTime: number;
  /**
   * Length of the media in seconds.
   */
  duration: number;
  /**
   * Whether the media element is muted.
   */
  muted: boolean;
  /**
   * The volume at which the media will be played.
   * Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.
   */
  volume: number;
  /**
   * Range of the media source.
   */
  played: TimeRanges;
  /**
   * Whether the media element is paused.
   */
  paused: boolean;
  /**
   * Whether the media element has ended playback.
   */
  ended: boolean;
  /**
   * MediaError for the most recent error, or null if there has not been an error.
   */
  error: MediaError;
  /**
   * Whether the media element should start over when it reaches the end.
   */
  loop: boolean;
  /**
   * AudioTrackList object listing all of the AudioTrack objects representing the media's audio tracks.
   */
  audioTracks: AudioTrackList;
  /**
   * VideoTrackList object listing all of the VideoTrack objects representing the media's video tracks.
   */
  videoTracks: VideoTrackList;
  /**
   * TextTrackList object listing all of the TextTrack objects representing the media's text tracks
   */
  textTracks: TextTrackList;
  /**
   * Width of the video in pixel.
   */
  readonly videoWidth: number;
  /**
   * Height of the video in pixel.
   */
  readonly videoHeight: number;
  /**
   * The rate at which the media is being played back.
   * 1.0 is normal speed, values lower than 1.0 make the media play slower than normal,
   * higher values make it play faster. Default is 1.0.
   */
  playbackRate: number;
  /**
   * How likely it is that UXP's media player will be able to play media of a given MIME type.
   * @param mimeType - MIME type of the media.
   * @returns How likely it is that the media can be played. One of the followings.
   *      <ul>
   *          <li>''(empty string): Media cannot be played on the current device.</li>
   *          <li>'probably': Media is probably playable on the current device.</li>
   *          <li>'maybe': There is not enough information to determine whether the media can play.</li>
   *      </ul>
   */
  canPlayType(mimeType: string): string;
  /**
   * Resets the media to its initial state and begins the process of selecting a media source
   * and loading the media in preparation for playback.
   * The amount of media data that is prefetched is determined by the value of 'preload' attribute.
   * `uxpvideoload` event is deprecated. Use `loadeddata` instead.
   */
  load(): void;
  /**
   * Attempts to begin playback of the media.
   * <br></br>Note that it returns a resolved Promise regardless of the actual result.
   * It notifies an error over the error event.
   * @returns `Promise<void>` Resolved when playback has been started, or rejected if playback cannot be started.
   * `uxpvideoplay` & `uxpvideocomplete` event is deprecated. Use `ended` instead.
   */
  play(): any;
  /**
   * Pause the playback of the media. If the media is already in a paused state, no effect.
   * `uxpvideopause` event is deprecated. Use `pause` instead.
   */
  pause(): void;
  /**
   * Pause the playback of the media and set the current playback time to the beginning.
   */
  stop(): void;
  /**
   * Access to all the custom data attributes (data-*) set.
   */
  dataset: any;
  innerText: string;
  /**
   * Base language of an element's attribute values and text content.
   */
  lang: string;
  /**
   * The text writing directionality of the content of the current element limited to only known values.
   */
  dir: string;
  /**
   * Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.
   */
  hidden: boolean | string;
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
  /**
         * Determines how much the media data be loaded when the plugin loads.
             This can be one of the followings. Default is "metadata".
             <ul>
                 <li>'none': Video should not be loaded</li>
                 <li>'metadata': Only video metadata is fetched</li>
                 <li>'auto': The whole video file can be downloaded</li>
                 <li>''(empty string): Synonym of the 'auto' value</li>
             </ul>
             example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" preload="metadata"></video>`
        */
  preload: string;
  /**
         * Video automatically begins to play back as soon as loading the data.
             example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoplay></video>`
        */
  autoplay: boolean;
}
declare type TimeRanges = any;
declare type MediaError = any;
declare type AudioTrackList = any;
declare type VideoTrackList = any;
declare type TextTrackList = any;
/**
 * WebViews in Adobe UXP is a component that allows you to embed web content in your plugins.
 * They are essentially a browser window that is displayed inside the plugin, allowing you to load web pages,
 * and interact with them using JavaScript.
 * WebViews can be used to display complex web pages inside the plugin.
 * WebViews can be controlled by the plugin using the JavaScript API provided by UXP.
 * They can also communicate with the plugin using `postMessage`,
 * allowing the plugin to interact with WebView and vice versa.
 * WebViews can be used to access external web services, to create custom UI
 * and to isolate the web content from the rest of the plugin.<br></br>
 *
 * <InlineAlert variant="warning" slots="text"/>
 *
 * WebViews are resource intensive since it launches multiple processes per plugin
 * and therefore should be used only in cases where you cannot create the plugin using UXP features.<br></br>
 *
 * **Note:**<br></br>
 * 1. WebViews support was introduced in UXP v6.0 to be used only in **Dialogs**. The reasoning here was to limit WebViews usage in persistent panels. Later due to overwhelming requests, WebView support was added for `Panels` with UXP v6.4.
 * 2. WebViews will need manifest version v5 or above.
 * 3. Checkout the template available in `UXP Developer Tool` for a quick getting starter plugin for WebView in UXP.
 * 4. `requiredPermissions.webview.enableMessageBridge=“localAndRemote”` is required for Plugin & WebView communication via postMessage.
 *
 * **Limitations:**<br></br>
 * 1. Only remote content (including localhost) is allowed at present. This means you will not be able to load local html files from plugin folders in UXP WebView. This behaviour is due to limitations on WindowsOS and **<i>may</i>** be enabled in later releases.
 * 2. Any links in a UXP WebView will not open in a new window.
 * e.g., In a browser, clicking `<a href="https://www.adobe.com" target="_blank">` would create a new Window
 * and open `https://www.adobe.com` from the new Window or JavaScript alert() pops up a new Window. UXP WebView doesn't permit this.
 *
 * In your plugin's code, add a WebView element in the desired location.
 * The element can take attributes such as id , height , and src to specify the WebView's properties<br></br>
 *
 * ```js
 * <webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>
 * ```
 *
 * <br></br>
 * <h3>Manifest requirements for UXP WebView</h3>
 * In order to use UXP WebView, the plugin should have the following manifest v5 permissions.<br></br>
 *
 * <table>
 *  <tr>
 *      <th>Key</th>
 *      <th>Value</th>
 *      <th>Description</th>
 *      <th>Mandatory/Optional</th>
 * </tr>
 * <tr>
 *      <td>.domains</td>
 *      <td>string[]</td>
 *      <td>Allows access to the specified domains. Wildcards (except top-level) are supported. e.g "https://*.adobe.com". <br></br> Recommended</td>
 *      <td>Mandatory</td>
 * </tr>
 * <tr>
 *      <td>.domains</td>
 *      <td>"all"</td>
 *      <td>Allows access to all domains.<br></br>Not recommended, may affect performance, security and privacy. Plugin may be blocked by enterprises.</td>
 *      <td>Mandatory</td>
 * </tr>
 * <tr>
 *      <td>.allow</td>
 *      <td>"yes"</td>
 *      <td>Enables WebView access to the plugin</td>
 *      <td>Mandatory</td>
 * </tr>
 * <tr>
 *      <td>.enableMessageBridge</td>
 *      <td>"localAndRemote"</td>
 *      <td>Allows Plugin & the content loaded on WebView to communicate regardless of where the content is loaded from **locally or remotely.**<br></br>
 *          **Note: ** At this stage only remote content is allowed. Refer **Limitations** section for more details</td>
 *      <td>Optional</td>
 * </tr>
 * <tr>
 *      <td>.enableMessageBridge</td>
 *      <td>"no"</td>
 *      <td>Not allow WebView & the content loaded on WebView to communicate</td>
 *      <td>Optional</td>
 * </tr>
 * </table><br></br>
 * @example
 * // In your `manifest.json` update the following
 * {
 * "manifestVersion": 5,
 * "requiredPermissions": {
 *     "webview": {
 *        "allow": "yes",
 *         // domains --> string[] | "all"
 *         "domains": [ "https://*.adobe.com", "https://*.google.com"],
 *         // enableMessageBridge can use either of these data "localAndRemote" | "localOnly" | "no"
 *         "enableMessageBridge": "localAndRemote"
 *      }
 *   }
 * }
 * @property uxpallowinspector - Enable Developer tools for debugging in UXP WebView<br></br>
 *                                       **Note:** Not supported in UWP platform<br></br>
 *                                       eg: `<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>`
 * @property width - Width of the WebView
 * @property height - Height of the WebView
 */
declare class HTMLWebViewElement {
  /**
   * The url to load in the WebView. Only remote content (including `localhost`) is allowed at present.
   */
  src: string;
  /**
   * The plugin and the content within the WebView can communicate with each other using `postMessage` and listening to the 'message' event.
   *
   * [Plugin]
   * - send messages to the content in the WebView `HTMLWebViewElement.postMessage(msg)`
   * - receive messages from the content in the WebView `window.addEventListener("message", (e) => {...})` where `e: Event { origin: url of the content, source: window.HTMLWebViewElement, data: message }`
   *
   * [Content in the WebView]
   * - send messages to plugin `window.uxpHost.postMessage(msg)`
   * - receive messages from plugin `window.addEventListener("message", (e) => { ... })` where `e: Event { origin: plugin id, source: window.uxpHost, data: message }`
   * @example
   * // Send message from plugin to WebView
   * let webViewDisplay = document.getElementById("webviewSample");
   * webViewDisplay.postMessage("PluginMessage1");
   *
   * // Plugin receives message from WebView via "message" event.
   * window.addEventListener("message", (e) => {
   *   console.log(`Message from WebView(Origin:${e.origin}): ${e.data}\n`);
   *
   *   if (e.data === "webviewmessage1") {
   *     webViewDisplay.postMessage("Thanks, Message1 recieved successfully");
   *   }
   * });
   * @example
   * // WebView sends message to Plugin
   * window.uxpHost.postMessage("webviewmessage1");
   *
   * // WebView receives messages from Plugin
   * window.addEventListener("message", (e) => {
   *   // (e) from Plugin
   *   // e.origin would be 'plugin id'
   *   // e.source would be 'window.uxpHost'
   *   // e.data is 'JSON.parse(JSON.stringify("PluginMessage1"))' which is "PluginMessage1"
   *   if (e.data === "PluginMessage1") {
   *     console.log(e.data);
   *   }
   * });
   * @param message - A message sent to the WebView. Please note that the message is stringified & parsed by JSON
   * @param targetOrigin - `[Optional]` - The origin of WebView for the event to be dispatched. The literal string "*" indicates no preference
   * @param transfer - `Optional` and `not functional yet`. Will be enabled in future release.
   */
  postMessage(message: any, targetOrigin: string, transfer: any): void;
  /**
         * Enable Developer tools for debugging in UXP WebView<br></br>
                                              **Note:** Not supported in UWP platform<br></br>
                                              eg: `<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>`
        */
  uxpallowinspector: boolean;
  /**
   * Width of the WebView
   */
  width: string;
  /**
   * Height of the WebView
   */
  height: string;
}
