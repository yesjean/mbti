const mbtiMatches = {
    "ENFP": [
        { type: "INTJ", reason: "ENFP의 창의성과 에너지가 INTJ에게 영감을 줄 수 있고, INTJ의 계획성과 조직력이 ENFP에게 안정감을 줄 수 있습니다." },
        { type: "INFJ", reason: "ENFP의 사교성과 창의성은 INFJ에게 새로운 관점을 제공할 수 있고, INFJ의 통찰력과 감성이 ENFP에게 깊이 있는 이해를 줄 수 있습니다." },
        { type: "ENTP", reason: "ENFP와 ENTP는 둘 다 새로운 아이디어를 탐구하는 것을 좋아하여 활발한 토론과 협력이 가능합니다." }
    ],
    "INTJ": [
        { type: "ENFP", reason: "INTJ의 분석적 사고와 계획력이 ENFP의 창의성과 에너지를 보완합니다." },
        { type: "ENTP", reason: "INTJ와 ENTP는 서로의 아이디어와 계획을 존중하며, 협력하여 더 나은 결과를 도출할 수 있습니다." },
        { type: "INFJ", reason: "INTJ의 논리적 사고와 INFJ의 직관력은 상호 보완적이며 깊이 있는 관계를 형성할 수 있습니다." }
    ],
    "INFJ": [
        { type: "ENFP", reason: "INFJ의 통찰력과 감성은 ENFP에게 깊이 있는 이해를 줄 수 있고, ENFP의 사교성과 창의성은 INFJ에게 새로운 관점을 제공할 수 있습니다." },
        { type: "INTJ", reason: "INFJ의 직관력과 감성은 INTJ의 논리적 사고와 잘 어울리며, 깊이 있는 관계를 형성할 수 있습니다." },
        { type: "ENFJ", reason: "INFJ와 ENFJ는 서로의 감성과 직관을 이해하며, 깊이 있는 정서적 유대감을 형성할 수 있습니다." }
    ],
    "ENTP": [
        { type: "INFJ", reason: "ENTP의 논리와 창의성은 INFJ에게 영감을 줄 수 있으며, INFJ의 통찰력과 감성은 ENTP에게 새로운 관점을 제공할 수 있습니다." },
        { type: "INTJ", reason: "ENTP와 INTJ는 서로의 아이디어와 계획을 존중하며, 협력하여 더 나은 결과를 도출할 수 있습니다." },
        { type: "ENFP", reason: "ENTP와 ENFP는 둘 다 새로운 아이디어를 탐구하는 것을 좋아하여 활발한 토론과 협력이 가능합니다." }
    ],
    "ISFJ": [
        { type: "ESTP", reason: "ISFJ의 배려심과 안정성은 ESTP에게 편안함을 줄 수 있고, ESTP의 활력과 모험심은 ISFJ에게 새로운 경험을 제공할 수 있습니다." },
        { type: "ESFJ", reason: "ISFJ와 ESFJ는 서로의 감성과 책임감을 이해하며, 안정적인 관계를 형성할 수 있습니다." },
        { type: "ISTJ", reason: "ISFJ와 ISTJ는 서로의 신뢰성과 실용성을 이해하며, 안정적인 관계를 형성할 수 있습니다." }
    ],
    "ESFJ": [
        { type: "ISFP", reason: "ESFJ의 사교성과 돌봄은 ISFP에게 안정감을 줄 수 있고, ISFP의 독립성과 창의성은 ESFJ에게 영감을 줄 수 있습니다." },
        { type: "ISFJ", reason: "ESFJ와 ISFJ는 서로의 감성과 책임감을 이해하며, 안정적인 관계를 형성할 수 있습니다." },
        { type: "ESTJ", reason: "ESFJ와 ESTJ는 서로의 신뢰성과 실용성을 이해하며, 안정적인 관계를 형성할 수 있습니다." }
    ],
    "ISTJ": [
        { type: "ISFJ", reason: "ISTJ와 ISFJ는 서로의 신뢰성과 실용성을 이해하며, 안정적인 관계를 형성할 수 있습니다." },
        { type: "ESTJ", reason: "ISTJ와 ESTJ는 실용적이고 조직적인 면에서 서로를 잘 이해하며 협력할 수 있습니다." },
        { type: "INTJ", reason: "ISTJ의 신뢰성과 INTJ의 계획성은 서로를 보완하며 안정적인 관계를 형성할 수 있습니다." }
    ],
    "ESTJ": [
        { type: "ISTJ", reason: "ESTJ와 ISTJ는 실용적이고 조직적인 면에서 서로를 잘 이해하며 협력할 수 있습니다." },
        { type: "ESFJ", reason: "ESTJ와 ESFJ는 서로의 신뢰성과 실용성을 이해하며, 안정적인 관계를 형성할 수 있습니다." },
        { type: "ENTJ", reason: "ESTJ와 ENTJ는 강한 리더십과 조직력을 바탕으로 협력할 수 있습니다." }
    ],
    "ISFP": [
        { type: "ESFJ", reason: "ISFP의 독립성과 창의성은 ESFJ에게 영감을 줄 수 있고, ESFJ의 사교성과 돌봄은 ISFP에게 안정감을 줄 수 있습니다." },
        { type: "ENFP", reason: "ISFP의 창의성과 ENFP의 사교성은 서로에게 영감을 줄 수 있습니다." },
        { type: "ESFP", reason: "ISFP와 ESFP는 서로의 독립성과 창의성을 이해하며, 즐거운 관계를 형성할 수 있습니다." }
    ],
    "ESFP": [
        { type: "ISFP", reason: "ESFP와 ISFP는 서로의 독립성과 창의성을 이해하며, 즐거운 관계를 형성할 수 있습니다." },
        { type: "ENFP", reason: "ESFP와 ENFP는 둘 다 사교적이고 창의적이며, 활발한 관계를 형성할 수 있습니다." },
        { type: "ESTP", reason: "ESFP와 ESTP는 활기차고 모험을 즐기며, 함께 많은 경험을 할 수 있습니다." }
    ],
    "ISTP": [
        { type: "ESTP", reason: "ISTP와 ESTP는 실용적이고 모험심이 강하며, 함께 많은 경험을 할 수 있습니다." },
        { type: "INTP", reason: "ISTP와 INTP는 논리적이고 분석적인 면에서 서로를 잘 이해하며 협력할 수 있습니다." },
        { type: "ENTP", reason: "ISTP와 ENTP는 둘 다 논리적이고 창의적이며, 함께 새로운 아이디어를 탐구할 수 있습니다." }
    ],
    "ESTP": [
        { type: "ISFJ", reason: "ESTP의 활력과 모험심은 ISFJ에게 새로운 경험을 제공할 수 있고, ISFJ의 배려심과 안정성은 ESTP에게 편안함을 줄 수 있습니다." },
        { type: "ESFP", reason: "ESTP와 ESFP는 활기차고 모험을 즐기며, 함께 많은 경험을 할 수 있습니다." },
        { type: "ISTP", reason: "ESTP와 ISTP는 실용적이고 모험심이 강하며, 함께 많은 경험을 할 수 있습니다." }
    ],
    "INTP": [
        { type: "ENTP", reason: "INTP와 ENTP는 둘 다 논리적이고 창의적이며, 함께 새로운 아이디어를 탐구할 수 있습니다." },
        { type: "INTJ", reason: "INTP와 INTJ는 분석적이고 전략적인 면에서 서로를 잘 이해하며 협력할 수 있습니다." },
        { type: "INFJ", reason: "INTP의 논리와 INFJ의 직관력은 상호 보완적이며 깊이 있는 관계를 형성할 수 있습니다." }
    ],
    "ENTJ": [
        { type: "INTJ", reason: "ENTJ와 INTJ는 강한 리더십과 조직력을 바탕으로 협력할 수 있습니다." },
        { type: "ESTJ", reason: "ENTJ와 ESTJ는 강한 리더십과 실용성을 바탕으로 협력할 수 있습니다." },
        { type: "ENTP", reason: "ENTJ와 ENTP는 창의적이고 논리적인 면에서 서로를 잘 이해하며 협력할 수 있습니다." }
    ],
    "ENFJ": [
        { type: "INFJ", reason: "ENFJ와 INFJ는 서로의 감성과 직관을 이해하며, 깊이 있는 정서적 유대감을 형성할 수 있습니다." },
        { type: "ENFP", reason: "ENFJ와 ENFP는 둘 다 사교적이고 감성적이며, 활발한 관계를 형성할 수 있습니다." },
        { type: "ESFJ", reason: "ENFJ와 ESFJ는 서로의 감성과 책임감을 이해하며, 안정적인 관계를 형성할 수 있습니다." }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const buttonsContainer = document.getElementById("buttons-container");
    const resultDiv = document.getElementById("result");

    // 버튼 추가
    Object.keys(mbtiMatches).forEach(mbti => {
        const button = document.createElement("button");
        button.textContent = mbti;
        button.classList.add("mbti-button");
        button.addEventListener("click", () => {
            showMatches(mbti);
        });
        buttonsContainer.appendChild(button);
    });
    function showMatches(mbti) {
        const matches = mbtiMatches[mbti];
        let html = `<h2>Best Matches for ${mbti}:</h2><ul>`;
        matches.forEach((match, index) => {
            html += `<li>
                <input type="checkbox" id="match-${index}" value="${match.type}">
                <label for="match-${index}"><strong>${match.type}</strong>: ${match.reason}</label>
            </li>`;
        });
        html += `</ul>`;
        resultDiv.innerHTML = html;
    
        const button = document.createElement("button");
        button.textContent = '리포트 생성';
        button.classList.add("report-button");
        resultDiv.appendChild(button);
        button.addEventListener('click', () => {
            const selectedMatches = matches.filter((_, index) => document.getElementById(`match-${index}`).checked);
            const selectedTypes = selectedMatches.map(match => match.type);
            window.location.href = `report.html?selectedTypes=${encodeURIComponent(JSON.stringify(selectedTypes))}`;
        });
    }
    // 매칭 결과 보여주기
    function showMatches(mbti) {
        const matches = mbtiMatches[mbti];
        let html = `<h2>${mbti}와 궁합이 좋은 MBTI</h2><ul>`;
        
        // 전체 선택 체크박스 추가
        html += `<li>
                    <input type="checkbox" id="select-all" value="select-all">
                    <label for="select-all"><strong>전체 선택</strong></label>
                </li>`;
        
        matches.forEach((match, index) => {
            html += `<li>
                <input type="checkbox" id="match-${index}" value="${match.type}">
                <label for="match-${index}"><strong>${match.type}</strong>: ${match.reason}</label>
            </li>`;
        });
        html += `</ul>`;
        resultDiv.innerHTML = html;
    
        const button = document.createElement("button");
        button.textContent = '리포트 생성';
        button.classList.add("report-button");
        resultDiv.appendChild(button);
    
        // 전체 선택 체크박스 이벤트 핸들러
        document.getElementById('select-all').addEventListener('change', (event) => {
            const isChecked = event.target.checked;
            matches.forEach((_, index) => {
                document.getElementById(`match-${index}`).checked = isChecked;
            });
        });
    
        button.addEventListener('click', () => {
            const selectedMatches = matches.filter((_, index) => document.getElementById(`match-${index}`).checked);
            const selectedTypes = selectedMatches.map(match => match.type);
            const data = {
                mbti: mbti,
                selectedTypes: selectedTypes
            };
            window.location.href = `report.html?data=${encodeURIComponent(JSON.stringify(data))}`;
        });
    }
    
    
});


 // 팝업 창 열기
 function openPopup(data) {
    const url = `report.html?data=${encodeURIComponent(JSON.stringify(data))}`;
    const popupWindow = window.open(url, "MatchPopup", "width=1000,height=1200");
    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("팝업 창이 차단되었습니다. 팝업 차단을 해제해주세요.");
    }
}