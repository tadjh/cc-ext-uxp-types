/**
 * Creates an instance of BaseUIEvent.
 */
declare class BaseUIEvent extends Event {
  constructor(type: any, eventInit: any);
  readonly pointerId: any;
  readonly width: number;
  readonly height: number;
  readonly pressure: number;
  readonly tangentialPressure: number;
  readonly tiltX: number;
  readonly tiltY: number;
  readonly twist: number;
  readonly clientX: number;
  readonly clientY: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly movementX: number;
  readonly movementY: number;
  readonly button: number;
  readonly buttons: any;
  readonly detail: any;
  readonly pointerType: any;
  readonly altKey: any;
  readonly shiftKey: any;
  readonly metaKey: any;
  readonly ctrlKey: any;
  readonly isPrimary: any;
  readonly which: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}
/**
 * Creates an instance of CloseEvent.
 */
declare class CloseEvent extends Event {
  constructor(code: any, reason: any, wasClean: any);
  code: any;
  reason: any;
  wasClean: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}

declare class MouseEvent extends Event {
  constructor(
    typeArg: string,
    mouseEventInit?: {
      bubbles?: boolean;
      cancelable?: boolean;
      composed?: boolean;
      altKey?: boolean;
      button?: number;
      buttons?: number;
      clientX?: number;
      clientY?: number;
      ctrlKey?: boolean;
      metaKey?: boolean;
      movementX?: number;
      movementY?: number;
      offsetX?: number;
      offsetY?: number;
      pageX?: number;
      pageY?: number;
      screenX?: number;
      screenY?: number;
      shiftKey?: boolean;
    }
  );

  readonly altKey: boolean;
  readonly button: number;
  readonly buttons: number;
  readonly clientX: number;
  readonly clientY: number;
  readonly ctrlKey: boolean;
  readonly metaKey: boolean;
  readonly movementX: number;
  readonly movementY: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly shiftKey: boolean;
  readonly x: number;
  readonly y: number;

  getModifierState(keyArg: string): boolean;
}

/**
 * Creates an instance of DragEvent.
 */
declare class DragEvent extends MouseEvent {
  constructor(type: any, eventInit: any);
  readonly dataTransfer: any;
}
/**
 * Creates an instance of ErrorEvent.
 */
declare class ErrorEvent extends Event {
  constructor(typeArg: any, eventInit?: any);
  readonly message: any;
  readonly filename: any;
  readonly lineno: any;
  readonly colno: any;
  readonly error: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}
/**
 * Creates an instance of Event.
 */
declare class Event {
  constructor(eventType: any, eventInit: any);
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
  static NONE: any;
  static CAPTURING_PHASE: any;
  static AT_TARGET: any;
  static BUBBLING_PHASE: any;
}
declare class EventTarget {
  addEventListener(eventName: any, callback: any, capture?: boolean): void;
  removeEventListener(eventName: any, callback: any, capture?: boolean): void;
  dispatchEvent(event: any): void;
}
/**
 * Creates an instance of GestureEvent.
 */
declare class GestureEvent extends BaseUIEvent {
  constructor(type: any, eventInit: any);
  readonly expansion: number;
  readonly rotation: number;
  readonly scale: number;
  readonly translationX: number;
  readonly translationY: number;
  readonly velocityAngular: number;
  readonly velocityExpansion: number;
  readonly velocityX: number;
  readonly velocityY: number;
  readonly pointerId: any;
  readonly width: number;
  readonly height: number;
  readonly pressure: number;
  readonly tangentialPressure: number;
  readonly tiltX: number;
  readonly tiltY: number;
  readonly twist: number;
  readonly clientX: number;
  readonly clientY: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly movementX: number;
  readonly movementY: number;
  readonly button: number;
  readonly buttons: any;
  readonly detail: any;
  readonly pointerType: any;
  readonly altKey: any;
  readonly shiftKey: any;
  readonly metaKey: any;
  readonly ctrlKey: any;
  readonly isPrimary: any;
  readonly which: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}
/**
 * Creates an instance of KeyboardEvent.
 */
declare class KeyboardEvent extends Event {
  constructor(type: any, eventInit: any);
  getModifierState(keyArgs: string): boolean;
  readonly altKey: any;
  readonly ctrlKey: any;
  readonly metaKey: any;
  readonly shiftKey: any;
  readonly code: any;
  readonly keyCode: any;
  readonly key: any;
  readonly location: any;
  readonly repeat: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}
/**
 * Creates an instance of MessageEvent.
 */
declare class MessageEvent extends Event {
  constructor(data: any, origin: any, source: any, eventInit: any);
  data: any;
  origin: any;
  source: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}
/**
 * Creates an instance of PointerEvent.
 */
declare class PointerEvent extends BaseUIEvent {
  constructor(type: any, eventInit: any);
  readonly pointerId: any;
  readonly width: number;
  readonly height: number;
  readonly pressure: number;
  readonly tangentialPressure: number;
  readonly tiltX: number;
  readonly tiltY: number;
  readonly twist: number;
  readonly clientX: number;
  readonly clientY: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly movementX: number;
  readonly movementY: number;
  readonly button: number;
  readonly buttons: any;
  readonly detail: any;
  readonly pointerType: any;
  readonly altKey: any;
  readonly shiftKey: any;
  readonly metaKey: any;
  readonly ctrlKey: any;
  readonly isPrimary: any;
  readonly which: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}
/**
 * Creates an instance of ProgressEvent.
 */
declare class ProgressEvent extends Event {
  constructor(typeArg: any, eventInit?: any);
  readonly lengthComputable: any;
  readonly loaded: any;
  readonly total: any;
  initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
  readonly type: any;
  readonly isTrusted: boolean;
  readonly target: Node;
  readonly currentTarget: Node;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly eventPhase: any;
  readonly defaultPrevented: boolean;
  /**
   * Returns the event's path
   */
  composedPath(): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  returnValue: any;
}
