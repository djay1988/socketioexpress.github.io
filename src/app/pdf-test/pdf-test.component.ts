import { Component, OnInit } from '@angular/core';
import { PdfGenService } from '../_services/pdf-gen.service';

@Component({
  selector: 'app-pdf-test',
  templateUrl: './pdf-test.component.html',
  styleUrls: ['./pdf-test.component.scss']
})
export class PdfTestComponent implements OnInit {

  items = [];
  total = 0;
  logo = '';
  paidLogo = '';
  constructor(private pdf: PdfGenService) {
    this.items.push(this.header);

    pdf.toBAse64('https://payhere.bhasha.lk/development/placeholder.jpg').then(data => {
      this.logo = data.toString();
      this.docDefinition.content[0]['columns'][0]['image'] = this.logo;
    });
    pdf.__getPaidImage().then(_img => {
      this.businessName[1].image = _img.toString();
    })

    for (let idx = 1; idx <= 10; idx++) {
      let qty = Math.floor(Math.random() * (5 + 1) + 5);
      let amount = Math.floor(Math.random() * (50 + 1) + 50);
      this.total += (qty * amount);
      let _row = [
        {
          stack: [
            {
              text: 'Item ' + idx,
            },
            {
              text: 'How to add multiple elements in a single column while having width?',
              color: '#333333',
              fontSize: 9,
            }
          ],
          border: [false, false, false, true],
          margin: [0, 5, 0, 5],
          alignment: 'left',
        },
        {
          text: qty,
          border: [false, false, false, true],
          margin: [0, 5, 0, 5],
          alignment: 'left',
        },
        {
          text: '$' + amount.toLocaleString('en-us', { minimumFractionDigits: 2 }),
          border: [false, false, false, true],
          margin: [0, 5, 0, 5],
          alignment: 'left',
        },
        {
          text: '$' + (qty * amount).toLocaleString('en-us', { minimumFractionDigits: 2 }),
          border: [false, false, false, true],
          fillColor: '#f5f5f5',
          alignment: 'right',
          margin: [0, 5, 0, 5],
        },
      ]
      this.items.push(_row);
    }
  }

  ngOnInit(): void {

  }
  open_pdf() {
    console.log('pdf open');
    this.pdf.openPdf(this.docDefinition);
  }
  download_pdf() {
    console.log('pdf open');
    this.pdf.downloadPdf(this.docDefinition);
  }

  header = [
    {
      text: 'DESCRIPTION',
      fillColor: '#eaf2f5',
      border: [false, true, false, true],
      margin: [0, 5, 0, 5],
      textTransform: 'uppercase',
    },
    {
      text: 'PRICE',
      fillColor: '#eaf2f5',
      border: [false, true, false, true],
      margin: [0, 5, 0, 5],
      textTransform: 'uppercase',
    },
    {
      text: 'QTY.',
      fillColor: '#eaf2f5',
      border: [false, true, false, true],
      margin: [0, 5, 0, 5],
      textTransform: 'uppercase',
    },
    {
      text: 'TOTAL',
      border: [false, true, false, true],
      alignment: 'right',
      fillColor: '#eaf2f5',
      margin: [0, 5, 0, 5],
      textTransform: 'uppercase',
    },
  ];
  businessName = [
    {
      text: 'Sample business',
      bold: true,
      fontSize: 14,
      color: '#333333',
      alignment: 'left',
    },
    {
      absolutePosition: { x: 360, y: 120 },
      image: this.paidLogo,
      width: 150
    }
  ];
  businesAddress = [
    {
      text: 'rasika.sub@gmail.coms \n Gamini Niwasa Kumbukwewa,ibbagamuwa \n   Kurunegala \n www.abc.lk',
      style: 'invoiceBillingAddress',
      fontSize: 12,
    },
  ];

  docDefinition = {
    pageSize: 'A4',
    footer: {
      image: 'data:image/png;base64,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',
      width: 90,
      margin: [12, 2],
      style: 'imageright'
    },
    content: [
      {
        columns: [
          {
            image: '',
            width: 100,
          },
          [
            {
              text: 'INVOICE',
              color: '#333333',
              width: '*',
              fontSize: 28,
              bold: true,
              alignment: 'right',
              margin: [0, 0, 0, 15],
            },
            {
              stack: [
                {
                  columns: [
                    {
                      text: 'Invoice No  : ',
                      color: '#666666',
                      width: '*',
                      fontSize: 12,
                      alignment: 'right',
                    },
                    {
                      text: '00001',
                      bold: true,
                      color: '#333333',
                      fontSize: 12,
                      alignment: 'right',
                      width: 100,
                    },
                  ],
                },
                {
                  columns: [
                    {
                      text: 'Invoice Date : ',
                      color: '#666666',
                      width: '*',
                      fontSize: 12,
                      alignment: 'right',
                    },
                    {
                      text: 'June 01, 2016',
                      color: '#333333',
                      fontSize: 12,
                      alignment: 'right',
                      width: 100,
                    },
                  ],
                },
                {
                  columns: [
                    {
                      text: 'Due Date : ',
                      color: '#666666',
                      fontSize: 12,
                      alignment: 'right',
                      width: '*',
                    },
                    {
                      text: 'June 01, 2016',
                      color: '#333333',
                      fontSize: 12,
                      alignment: 'right',
                      width: 100,
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
      {
        columns: this.businessName,
      },
      {
        columns: this.businesAddress,
      },
      '\n\n',
      {
        layout: {
          defaultBorder: false,

          hLineWidth: function (i, node) {
            return 1;
          },
          vLineWidth: function (i, node) {
            return 1;
          },
          hLineColor: function (i, node) {
            if (i === 1 || i === 0) {
              return '#bfdde8';
            }
            return '#eaeaea';
          },
          vLineColor: function (i, node) {
            return '#eaeaea';
          },
          hLineStyle: function (i, node) {
            return null;
          },
          // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
          paddingLeft: function (i, node) {
            return 10;
          },
          paddingRight: function (i, node) {
            return 10;
          },
          paddingTop: function (i, node) {
            return 2;
          },
          paddingBottom: function (i, node) {
            return 2;
          },
          fillColor: function (rowIndex, node, columnIndex) {
            return '#fff';
          },
        },
        table: {
          headerRows: 1,
          widths: ['*', 80, 80, 100],
          body: this.items,
        },
      },
      '\n',
      '\n\n',
      {
        stack: [
          {

            layout: {
              defaultBorder: false,
              hLineWidth: function (i, node) {
                return 1;
              },
              vLineWidth: function (i, node) {
                return 1;
              },
              hLineColor: function (i, node) {
                return '#eaeaea';
              },
              vLineColor: function (i, node) {
                return '#eaeaea';
              },
              hLineStyle: function (i, node) {
                // if (i === 0 || i === node.table.body.length) {
                return null;
                //}
              },
              // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
              paddingLeft: function (i, node) {
                return 10;
              },
              paddingRight: function (i, node) {
                return 10;
              },
              paddingTop: function (i, node) {
                return 3;
              },
              paddingBottom: function (i, node) {
                return 3;
              },
              fillColor: function (rowIndex, node, columnIndex) {
                return '#fff';
              },
            },
            table: {
              headerRows: 1,
              widths: ['*', 'auto'],
              body: [
                [
                  {
                    text: 'Subtotal',
                    border: [false, true, false, true],
                    alignment: 'right',
                    margin: [0, 5, 0, 5],
                  },
                  {
                    border: [false, true, false, true],
                    text: '$150.00',
                    alignment: 'right',
                    fillColor: '#f5f5f5',
                    margin: [0, 5, 0, 5],
                  },
                ],
                [
                  {
                    text: 'Discount',
                    border: [false, false, false, true],
                    alignment: 'right',
                    margin: [0, 5, 0, 5],
                  },
                  {
                    text: '10%',
                    border: [false, false, false, true],
                    fillColor: '#f5f5f5',
                    alignment: 'right',
                    margin: [0, 5, 0, 5],
                  },
                ],
                [
                  {
                    text: 'Total',
                    bold: true,
                    fontSize: 20,
                    alignment: 'right',
                    border: [false, false, false, true],
                    margin: [0, 5, 0, 5],
                  },
                  {
                    text: '$135.00',
                    bold: true,
                    fontSize: 18,
                    alignment: 'right',
                    border: [false, false, false, true],
                    fillColor: '#f5f5f5',
                    margin: [0, 5, 0, 5],
                  },
                ],
              ],
            },
          },
          {
            text: 'NOTES',
            style: 'notesTitle',
          },
          {
            text: 'Some notes goes here \n Notes second line',
            style: 'notesText',
          },
        ],
        unbreakable: true
      },

    ],
    styles: {
      notesTitle: {
        fontSize: 10,
        bold: true,
        margin: [0, 50, 0, 3],
      },
      notesText: {
        fontSize: 10,
      },
      imageright: {
        alignment: 'right'
      },
    },
    defaultStyle: {
      columnGap: 20,
      fontSize: 11,
      font: 'Lato',
    },
  };

}
