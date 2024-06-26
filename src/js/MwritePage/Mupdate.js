const nowlocation = location.search; // 주소의 쿼리스트링 가져옴
const nowIndex = nowlocation.split("=")[1]; // 쿼리스트링에서 인덱스번호 추출
const nowKategorie = new MemorizeKategorie().getSession(); // 세션에서 카테고리 가져옴
const localContent = new StoreBoard().getContentArray(nowKategorie) // 로컬 스토리지 내용 전부 가져옴
const contentObj = new StoreBoard().getContentArray(nowKategorie)[nowIndex]; // 로컬저장소에서 해당 인덱스 컨텐츠 불러오기
const userInfor = new UserLoginManager().getUserInforBox(); // 유저 정보를 가져옴
const postBtn = document.querySelector("#itembox-make"); // 글 작성 HTML버튼 가져옴
const cancleBtn = document.querySelector("#itembox-cancle"); // 글 작성 취소 HTML 버튼 가져옴

document.querySelector("#title-box-form-input").value = contentObj.postTitle;
document.querySelector("#text-box-area").innerHTML = contentObj.postContent;
document.querySelector("#title-box-form").onsubmit = (e) => {
    e.preventDefault();
}
document.querySelector("#title-box-form-input").onkeyup = (e) =>{
    if(e.keyCode === 13){
        document.querySelector("#text-box-area").focus();
    }
}


postBtn.addEventListener('click', () => {
     // 제목 공백입력 방지
     if (document.querySelector("#title-box-form-input").value.trim() == "") {
        alert("제목을 입력하세요");
        return;
    }
    // 제목 글자수 제한
    if (document.querySelector("#title-box-form-input").value.length > 30) {
        alert("제목은 30자를 넘길 수 없습니다.");
        return;
    }
        // 본문 공백입력 방지
    if (document.querySelector("#text-box-area").value.trim() == "") {
        alert("본문 내용을 입력하세요");
        return;
    }

    const updateObj = new MateBoardManager(new GetConetent().getTitleContent("#title-box-form-input"), new GetConetent().getPosterConetent("#text-box-area"), userInfor.userNickname, userInfor.userId);
    localContent[nowIndex].postTitle = updateObj.postTitle; //로컬스토리지
    localContent[nowIndex].postContent = updateObj.postContent; // 내용 교체
    localStorage.setItem(nowKategorie, JSON.stringify(localContent)); // 로컬에 저장
    
    switch (nowKategorie) {
        case "LOL":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "StarRail":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "PUBG":
            window.location.href = "../kategoriePage/PUBG.html";
            break;
        case "eternalreturn":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "valorant":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "kartrider":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "lostark":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "overwatch":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "starcraft":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "steamgame":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "suddenattack":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        case "TFT":
            window.location.href = `../detailPage/detailPage.html?index=${nowIndex}`
            break;
        default:
            alert("잘못된 접근입니다.");
            /* ↓ 임시 코드입니다 수정 필요 ↓*/
            window.location.href = "https://www.naver.com"
        /* ↑ 임시 코드입니다 수정필요 ↑*/
    }
})


cancleBtn.addEventListener('click', () => {
    window.location.href = document.referrer;;
})