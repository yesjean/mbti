var form = {
    report: {
      name: "reportRoot",
      type: "report",
      paperSize: "A4",
      paperWidth: "210mm",
      paperHeight: "297mm",
      marginLeft: "12mm",
      marginRight: "12mm",
      marginTop: "15mm",
      marginBottom: "15mm",
    },
    page: {
      name: "reportPage",
      type: "report",
      pageHeader: {
        name: "pageHeader",
        items: [
          {
            type: "rbox",
            name: "",
            right: 0,
            itemGap: 4,
            items: [
              {
                type: "text",
                name: "",
                text: "Date:",
              },
              {
                type: "text",
                value: "${date}",
                name: "",
                text: "Text",
              },
            ],
          },
        ],
      },
      reportHeader: {
        name: "reportHeader",
        items: [
          {
            type: "text",
            text: "MBTI",
            styles: {
              fontSize: "30px",
              fontWeight: "bold",
            },
          },
        ],
      },
      reportFooter: {
        name: "reportFooter",
      },
      pageFooter: {
        name: "pageFooter",
        items: [
          {
            type: "rbox",
            name: "",
            right: 0,
            itemGap: 4,
            items: [
              {
                type: "text",
                value: "${page}",
                name: "",
                text: "Text",
              },
              {
                type: "text",
                name: "",
                text: "/",
                styles: {
                  paddingLeft: "3px",
                  paddingRight: "3px",
                },
              },
              {
                type: "text",
                value: "${pages}",
                name: "",
                text: "Text",
              },
            ],
          },
        ],
      },
      body: {
        itemGap: 4,
        items: [
          {
            type: "simpleband",
            data: "mbti",
            width: "100%",
            detail: {
              type: "detail",
              width: "100%",
              name: "",
            },
            groups: [],
            header: {
              type: "stack",
              width: "100%",
              name: null,
              items: [],
            },
            footer: {
              type: "stack",
              width: "100%",
              name: null,
            },
            dataRow: {
              type: "stack",
              width: "100%",
              height: 52,
              name: null,
              items: [
                {
                    "type": "text",
                    "value": "reason",
                    "left": 65,
                    "top": 20,
                    "text": "Text"
                },
                {
                    "type": "text",
                    "value": "type",
                    "left": 0,
                    "top": 20,
                    "text": "Text"
                }
              ],
            },
          },
        ],
      },
    },
    assets: {
      "/": [],
    },
    data: {
      "mbti": {
        type: "band",
        fields: [
          {
            fieldName: "type",
            dataType: "text",
            source: "",
            format: "",
            sample: "enfp",
            description: "",
            dateReader: null,
          },
          {
            fieldName: "reason",
            dataType: "text",
            source: "",
            format: "",
            sample: "어쩍호",
            description: "",
            dateReader: null,
          },
        ],
      },
    },
  }