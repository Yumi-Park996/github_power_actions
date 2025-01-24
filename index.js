async function makeIssue(){
    const token = process.env.GH_TOKEN;
    const OWNER = "Yumi_Park996"; //수정
    const REPO = "github_power_actions"; //수정
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST' ,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "불행의 숫자", //수정
            body: `${Math.floor(Math.random() * 44) +1}`, //수정
        })
    });
    if (response.ok) {
        console.log("망함");
    } else {
        console.log("수고");
    }
}

makeIssue();