import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ref, createRef, Ref } from "lit/directives/ref.js";
import SimpleMDE from "easymde";
import easyMDEStyle from "easymde/dist/easymde.min.css";
import faStyle from "@fortawesome/fontawesome-free/css/fontawesome.css";
import fontFace from "@fortawesome/fontawesome-free/css/regular.css";
@customElement("md-editor")
export class MDEditor extends LitElement {
  @property()
  initialValue: string = "";

  @property()
  value: string = "";

  easyMDE: SimpleMDE | null = null;
  inputRef: Ref<HTMLTextAreaElement> = createRef();

  getValue(): string {
    return this.easyMDE!.value();
  }

  render() {
    return html`<div>
      <style>
        ${fontFace}
                ${faStyle}
                ${easyMDEStyle}
      </style>
      <textarea ${ref(this.inputRef)}></textarea>
    </div>`;
  }

  firstUpdated(_changedProperties: any): void {
    super.firstUpdated(_changedProperties);
    const input = this.inputRef.value!;

    this.easyMDE = new SimpleMDE({
      element: input,
      autoDownloadFontAwesome: false,
    });
    this.easyMDE.value(this.initialValue);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-editor": MDEditor;
  }
}
