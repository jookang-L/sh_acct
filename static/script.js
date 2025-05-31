document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const resultDiv = document.getElementById('result');

    // 임시 데이터 (예시: 학번과 이름에 맞는 계정 정보)
    const studentAccounts = {
        '20230101_홍길동': { id: 'honggildong@school.edu', pw: 'arsenal1234' },
        '20230102_김철수': { id: 'kimcheolsu@school.edu', pw: 'gunners5678' },
        '20230103_박영희': { id: 'parkyeonghee@school.edu', pw: 'arsenalpass' }
        '20230104_민정원': { id: 'jeongwon@school.edu', pw: 'arsenalpass' }
    };

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault(); // 폼 기본 제출 막기

        const studentNumber = document.getElementById('studentNumber').value.trim();
        const studentName = document.getElementById('studentName').value.trim();

        const key = `${studentNumber}_${studentName}`;

        if (studentAccounts[key]) {
            const account = studentAccounts[key];
            resultDiv.innerHTML = `<p>계정 ID: <strong>${account.id}</strong><br>비밀번호: <strong>${account.pw}</strong></p>`;
        } else {
            resultDiv.innerHTML = `<p>해당 학생의 계정을 찾을 수 없습니다.</p>`;
        }
    });
});