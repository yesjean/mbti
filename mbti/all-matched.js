var allMatchedPage = 
{
  "name": "reportPage",
  "type": "report",
  "pageHeader": {
    "name": "pageHeader"
  },
  "reportHeader": {
    "name": "reportHeader"
  },
  "reportFooter": {
    "name": "reportFooter"
  },
  "pageFooter": {
    "name": "pageFooter"
  },
  "body": {
    "itemGap": 4,
    "items": [
      {
        "type": "space",
        "name": "",
        "size": 28
      },
      {
        "type": "text",
        "name": "",
        "text": "나의 모든 MBTI 궁합",
        "styles": {
          "fontSize": "25px",
          "fontWeight": "bold"
        }
      },
      {
        "type": "realchart",
        "data": "mbtiChart",
        "width": 624,
        "height": 176,
        "designBorder": false,
        "xAxes": [
          {
            "type": "category",
            "title": {
              "visible": false,
              "text": "Axis title"
            },
            "grid": {
              "visible": false,
              "endVisible": false
            },
            "line": {
              "visible": false
            },
            "tick": {
              "visible": false
            },
            "crosshair": {
              "visible": false
            },
            "categories": [
              "a",
              "b",
              "c",
              "d",
              "e"
            ],
            "categoryField": "mbti"
          }
        ],
        "yAxes": [
          {
            "type": "linear",
            "title": {
              "visible": false,
              "text": "Axis title"
            },
            "grid": {
              "visible": false,
              "startVisible": true,
              "endVisible": true
            },
            "line": {
              "visible": false
            },
            "tick": {
              "visible": false
            },
            "crosshair": {
              "visible": false
            }
          }
        ],
        "seriesCollection": [
          {
            "valueField": "values",
            "values": [
              3,
              3,
              7,
              3,
              2
            ],
            "type": "bar",
            "name": "bar",
            "nameField": "myMbti",
            "colorByPoint": true
          }
        ],
        "title": {
          "visible": false,
          "text": "Title"
        },
        "subtitle": {
          "visible": false,
          "text": "Subtitle"
        }
      },
      {
        "type": "text",
        "name": "",
        "text": "모든 MBTI 궁합",
        "styles": {
          "fontSize": "25px",
          "fontWeight": "bold"
        }
      },
      {
        "type": "tableband",
        "data": "mbtiPercent",
        "width": "100%",
        "name": "",
        "detail": {
          "type": "detail",
          "width": "100%",
          "name": ""
        },
        "colCount": 17,
        "columns": [
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          },
          {
            "width": "20%"
          }
        ],
        "header": {
          "width": "100%",
          "height": "40px",
          "name": "",
          "rowCount": 1,
          "fixed": false,
          "cellStyles": {},
          "rows": [
            {}
          ],
          "cells": [],
          "styles": {
            "fontWeight": "bold",
            "color": "white",
            "backgroundColor": "#4c96d6",
            "__tag_": {}
          },
          "items": [
            {
              "type": "text",
              "name": "",
              "col": 1,
              "row": 0,
              "text": "ENFJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 2,
              "row": 0,
              "text": "ENTJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 3,
              "row": 0,
              "text": "ENTP"
            },
            {
              "type": "text",
              "name": "",
              "col": 4,
              "row": 0,
              "text": "ESFJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 5,
              "row": 0,
              "text": "ESFP"
            },
            {
              "type": "text",
              "name": "",
              "col": 6,
              "row": 0,
              "text": "ESTJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 7,
              "row": 0,
              "text": "ESTP"
            },
            {
              "type": "text",
              "name": "",
              "col": 8,
              "row": 0,
              "text": "INFJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 9,
              "row": 0,
              "text": "INFP"
            },
            {
              "type": "text",
              "name": "",
              "col": 10,
              "row": 0,
              "text": "INTJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 11,
              "row": 0,
              "text": "INTP"
            },
            {
              "type": "text",
              "name": "",
              "col": 12,
              "row": 0,
              "text": "ISFJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 13,
              "row": 0,
              "text": "ISFP"
            },
            {
              "type": "text",
              "name": "",
              "col": 14,
              "row": 0,
              "text": "ISTJ"
            },
            {
              "type": "text",
              "name": "",
              "col": 15,
              "row": 0,
              "text": "ISTP"
            },
            {
              "type": "text",
              "name": "",
              "col": 16,
              "row": 0,
              "text": "ENFP"
            }
          ]
        },
        "footer": {
          "width": "100%",
          "name": "",
          "visible": false,
          "rowCount": 1,
          "fixed": false,
          "cellStyles": {},
          "rows": [
            {}
          ],
          "cells": []
        },
        "dataRow": {
          "width": "100%",
          "height": "40px",
          "name": "",
          "rowCount": 1,
          "fixed": false,
          "cellStyles": {},
          "rows": [
            {}
          ],
          "cells": [
            {
              "r": 0,
              "c": 0,
              "styles": {
                "backgroundColor": "#4c96d6"
              }
            },
            {
              "r": 0,
              "c": 1,
              "onGetStyles": "",
              "styleCallback": null
            }
          ],
          "items": [
            {
              "type": "text",
              "value": "myMbti",
              "name": "",
              "col": 0,
              "row": 0,
              "styles": {
                "fontWeight": "bold",
                "color": "white",
                "__tag_": {}
              }
            },
            {
              "type": "text",
              "value": "ENFJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 1,
              "row": 0
            },
            {
              "type": "text",
              "value": "ENTJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 2,
              "row": 0
            },
            {
              "type": "text",
              "value": "ENTP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 3,
              "row": 0
            },
            {
              "type": "text",
              "value": "ESFJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 4,
              "row": 0
            },
            {
              "type": "text",
              "value": "ESFP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 5,
              "row": 0
            },
            {
              "type": "text",
              "value": "ESTJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 6,
              "row": 0
            },
            {
              "type": "text",
              "value": "ESTP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 7,
              "row": 0
            },
            {
              "type": "text",
              "value": "INFJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 8,
              "row": 0
            },
            {
              "type": "text",
              "value": "INFP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 9,
              "row": 0
            },
            {
              "type": "text",
              "value": "INTJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 10,
              "row": 0
            },
            {
              "type": "text",
              "value": "INTP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 11,
              "row": 0
            },
            {
              "type": "text",
              "value": "ISFJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 12,
              "row": 0
            },
            {
              "type": "text",
              "value": "ISFP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 13,
              "row": 0
            },
            {
              "type": "text",
              "value": "ISTJ",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 14,
              "row": 0
            },
            {
              "type": "text",
              "value": "ISTP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 15,
              "row": 0
            },
            {
              "type": "text",
              "value": "ENFP",
              "width": "100%",
              "height": "100%",
              "name": "",
              "onGetValue": "if (!value) return 0",
              "onGetStyles": "let backgroundColor = '';\n\nif (value === 85) {\n    backgroundColor = '#b06eff'; // 초록\n} else if (value === 80) {\n    backgroundColor = '#d5b4fc'; // 보라\n} else if (value >= 70 && value <= 79) {\n    backgroundColor = '#b9e2fa'; // 하늘\n} else if (value >= 60 && value <= 69) {\n    backgroundColor = '#9effc1'; // 민트\n} else if (value >= 50 && value <= 59) {\n    backgroundColor = '#fff56f'; // 노랑\n} else if (value >= 40 && value <= 49) {\n    backgroundColor = '#fba7bc'; // 핑크\n} else if (value >= 30 && value <= 39) {\n    backgroundColor = '#ffc8ac'; // 주황\n} else if (value >= 20 && value <= 29) {\n    backgroundColor = '#d64c4c';\n} else if (value === 0 || value === null || value === undefined) {\n    backgroundColor = '#d6824c';\n}\n\nreturn {backgroundColor: backgroundColor}",
              "col": 16,
              "row": 0
            }
          ]
        }
      }
    ]
  }
}