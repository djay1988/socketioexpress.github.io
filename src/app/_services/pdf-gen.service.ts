import { Injectable } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake.min";


@Injectable({
  providedIn: 'root'
})
export class PdfGenService {

  constructor() {

    pdfMake.fonts = {
      Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
      },
      Lato: {
        normal: 'http://localhost:4200/assets/Lato/Lato-Light.ttf',
        bold: 'http://localhost:4200/assets/Lato/Lato-Regular.ttf',
        italics: 'http://localhost:4200/assets/Lato/Lato-LightItalic.ttf',
        bolditalics: 'http://localhost:4200/assets/Lato/Lato-Italic.ttf'
      },
    };
  }

  async __getPaidImage() {
    return await this.toBAse64('/assets/paid-blue-r.png');
  }

  openPdf(data) {
    pdfMake.createPdf(data).open();
  }
  downloadPdf(data) {
    pdfMake.createPdf(data).download();
  }

  async toBAse64(url) {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      }
    });
  }
}
