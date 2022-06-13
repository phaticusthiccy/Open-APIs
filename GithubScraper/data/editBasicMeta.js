var getBasicMetaGithub = require ("./getBasicMeta");
async function editBasicMetaGithub(name) {
    var data = new Object()
    var payload = await getBasicMetaGithub(name) 

    data.user = {}
    data.activity = {}
    data.repositories = {}
    data.languages = {}
    data.contributions = {}
    data.achievements;
    data.code_snippet;
    data.user.username = name
    data.user.name = payload.split('<img class="avatar" src=')[1].split('<span>')[1].split('</span>')[0]
    data.user.github_url = "https://www.github.com/" + name
    data.user.bio = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"/></svg>')[1].split('<div class="introduction">')[1].split('</div>')[0].replace(/\n/gi, "").replace("            ", "").replace("          ", "")
    data.user.avatar = "https://github.com/" + name + ".png"
    data.user.creation_date = (payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/></svg>')[1].split('Joined GitHub ')[1].split('ago')[0] + "ago")
    data.user.followers = (payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"/></svg>')[1].split('Followed by ')[1].split(' users')[0])
    data.user.following = (payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"/></svg>')[2].split('Following ')[1].split(' users')[0])
    data.user.organizations = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"/></svg>')[1].split('Member of ')[1].split(' organizations')[0]
    data.user.contributed_repositories = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"/></svg>')[1].split('Contributed to ')[1].split(' ')[0]
    try {
        data.user.hireable = payload.split('<div class="field hire">')[1].split('</svg>')[1].split('</div>')[0].replace(/\n/gi, "").replace(/              /gi, "").replace(/            /g, "")
    } catch {
        data.user.hireable = "Not Available for hire!"
    }
    data.user.repositories = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>')[1].split('</h2>')[0].replace(/ /gi, "").replace("\n", "").replace("Repository", "").replace('Repositories', "").replace(/\n/gi, "")
    data.user.stargazers = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/></svg>')[2].split('Stargazers')[0].replace(/\n/gi, "").replace(/              /gi, "").replace(/            /g, "").replace(/ /gi, "")
    data.user.starred_repositories = payload.split('Starred ')[1].split(" ")[0]
    data.user.sponsors = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"/></svg>')[2].split('Sponsors')[0].replace(/ /g, "").replace("\n", "")
    data.user.sponsoring = payload.split('Sponsoring ')[1].split(' repositories')[0]
    data.user.forkers = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>')[1].split('Forkers')[0].replace(/ /g, "").replace("\n", "")
    data.user.watchers = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"/></svg>')[2].split('Watchers')[0].replace(/ /g, "").replace("\n", "")
    data.user.watching_repositories = payload.split('Watching ')[1].split(' repositories')[0]
    data.activity.commits = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>')[1].split('Commits')[0].replace(/ /g, "").replace("\n", "")
    data.repositories.total_added_lines = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H2.75zM1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V1.75zm7 1.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0V7h-1.5a.75.75 0 010-1.5h1.5V4A.75.75 0 018 3.25zm-3 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"/></svg>')[1].split('</div>')[0].split('added')[0].replace(/ /gi, "").replace("m", "0000").replace(/\n/g, "").includes(".") ? payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H2.75zM1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V1.75zm7 1.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0V7h-1.5a.75.75 0 010-1.5h1.5V4A.75.75 0 018 3.25zm-3 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"/></svg>')[1].split('</div>')[0].split('added')[0].replace(/ /gi, "").replace(/\n/g, "").replace("k", "00").replace(".", "") : payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H2.75zM1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V1.75zm7 1.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0V7h-1.5a.75.75 0 010-1.5h1.5V4A.75.75 0 018 3.25zm-3 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"/></svg>')[1].split('</div>')[0].split('added')[0].replace(/ /gi, "").replace("m", "0000").replace(/\n/g, "").replace("k", "000")
    data.repositories.total_removed_lines = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H2.75zM1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V1.75zm7 1.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0V7h-1.5a.75.75 0 010-1.5h1.5V4A.75.75 0 018 3.25zm-3 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"/></svg>')[1].split(' removed')[0].split('                    ')[1].split("added, ")[1].replace("m", "0000").includes(".") ? payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H2.75zM1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V1.75zm7 1.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0V7h-1.5a.75.75 0 010-1.5h1.5V4A.75.75 0 018 3.25zm-3 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"/></svg>')[1].split(' removed')[0].split('                    ')[1].split("added, ")[1].replace("m", "0000").replace("k", "00").replace(".", "") : payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H2.75zM1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V1.75zm7 1.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0V7h-1.5a.75.75 0 010-1.5h1.5V4A.75.75 0 018 3.25zm-3 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"/></svg>')[1].split(' removed')[0].split('                    ')[1].split("added, ")[1].replace("m", "0000").replace("k", "000")
    data.activity.reviewed_pull_requests = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v7.736a.75.75 0 101.5 0V1.75A1.75 1.75 0 0011.25 0h-8.5A1.75 1.75 0 001 1.75v11.5c0 .966.784 1.75 1.75 1.75h3.17a.75.75 0 000-1.5H2.75a.25.25 0 01-.25-.25V1.75zM4.75 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4 7.75A.75.75 0 014.75 7h2a.75.75 0 010 1.5h-2A.75.75 0 014 7.75zm11.774 3.537a.75.75 0 00-1.048-1.074L10.7 14.145 9.281 12.72a.75.75 0 00-1.062 1.058l1.943 1.95a.75.75 0 001.055.008l4.557-4.45z"/></svg>')[1].split('Pull requests')[0].replace(/ /g, "").replace("\n", "")
    data.activity.opened_pull_requests = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/></svg>')[1].split('Pull request')[0].replace(/ /g, "").replace("\n", "")
    data.activity.opened_issues = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/></svg>')[1].split('Issues')[0].split('Pull requests')[0].replace(/ /g, "").replace("\n", "")
    data.activity.issue_comments = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/></svg>')[1].split('issue')[0].split('Pull requests')[0].replace(/ /g, "").replace("\n", "")
    try {
        data.repositories.preferred_license = payload.split('Prefers ')[1].split(' license')[0]
    } catch {
        data.repositories.preferred_license = undefined
    }
    data.repositories.relases = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"/></svg>')[1].split(' Releases')[0].replace(/ /g, "").replace("\n", "")
    data.repositories.packages = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"/></svg>')[1].split('</div>')[0].replace(/ /g, "").replace(/\n/gi, "").replace("Packages", "").replace('Package', "")
    data.repositories.used_space = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M2.5 3.5c0-.133.058-.318.282-.55.227-.237.592-.484 1.1-.708C4.899 1.795 6.354 1.5 8 1.5c1.647 0 3.102.295 4.117.742.51.224.874.47 1.101.707.224.233.282.418.282.551 0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 5.205 9.646 5.5 8 5.5c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707-.224-.233-.282-.418-.282-.551zM1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591v-9zM2.5 8V5.724c.241.15.503.286.779.407C4.525 6.68 6.195 7 8 7c1.805 0 3.475-.32 4.722-.869.275-.121.537-.257.778-.407V8c0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 9.705 9.646 10 8 10c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707C2.558 8.318 2.5 8.133 2.5 8zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.236 6.236 0 01-.779-.406z"/></svg>')[1].split(' used')[0].replace(/ /g, "").replace("\n", "").replace("MB", " Mb").replace("byte", " Byte").replace("KB", " Kb").replace("GB", " Gb")
    try {
        data.languages.used_repo_languages = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('</section>')[0].split('class="text">Using ')[1].split(' different')[0]
    } catch {
        data.languages.used_repo_languages = undefined
    }
    data.languages.used_all_languages = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25h-6.5a.75.75 0 00-.53.22L4.5 14.44v-2.19a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-8.5zM1.75 1A1.75 1.75 0 000 2.75v8.5C0 12.216.784 13 1.75 13H3v1.543a1.457 1.457 0 002.487 1.03L8.061 13h6.189A1.75 1.75 0 0016 11.25v-8.5A1.75 1.75 0 0014.25 1H1.75zm5.03 3.47a.75.75 0 010 1.06L5.31 7l1.47 1.47a.75.75 0 01-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2a.75.75 0 011.06 0zm2.44 0a.75.75 0 000 1.06L10.69 7 9.22 8.47a.75.75 0 001.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0z"/></svg>')[1].split('</h2>')[0].replace(/ /g, "").replace("\n", "").split('Languages')[0]
    var lang1;
    var lang2;
    var lang3;
    var lang4;
    var lang5;
    var lang6;
    var lang7;
    var lang8;
    var non_lang;
    if (payload.includes('<rect mask="url(#languages-bar)" x="0" y="0" width="460" height="8" fill="#d1d5da"/>')) {
        non_lang = true
    } else {
        non_lang = false
    }
        
    try {
        lang1 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[2].split('width="')[1].split('"')[0]
    } catch {
        lang1 = undefined
    }
    try {
        lang2 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[3].split('width="')[1].split('"')[0]
    } catch {
        lang2 = undefined
    }
    try {
        lang3 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[4].split('width="')[1].split('"')[0]
    } catch {
        lang3 = undefined
    }
    try {
        lang4 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[5].split('width="')[1].split('"')[0]
    } catch {
        lang4 = undefined
    }
    try {
        lang5 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[6].split('width="')[1].split('"')[0]
    } catch {
        lang5 = undefined
    }
    try {
        lang6 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[7].split('width="')[1].split('"')[0]
    } catch {
        lang6 = undefined
    }
    try {
        lang7 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[8].split('width="')[1].split('"')[0]
    } catch {
        lang7 = undefined
    }
    try {
        lang8 = payload.split('<svg class="bar" xmlns="http://www.w3.org/2000/svg" width="460" height="8">')[1].split('<rect mask="url(#languages-bar)')[9].split('width="')[1].split('"')[0]
    } catch {
        lang8 = undefined
    }
    if (non_lang) {
        data.languages.most_used_languages = undefined
    } else {
        if (lang1 == undefined) {
            data.languages.most_used_languages = undefined
        }
        if (lang2 == undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                }
            ]
        }
        if (lang3 == undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[2].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang2) * 100) / 460).toString()
                }
            ]
        }
        if (lang4 == undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[2].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang2) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[3].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang3) * 100) / 460).toString()
                }
            ]
        }
        if (lang5 == undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[2].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang2) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[3].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang3) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[4].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang4) * 100) / 460).toString()
                }
            ]
        }
        if (lang6 == undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[2].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang2) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[3].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang3) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[4].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang4) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[5].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang5) * 100) / 460).toString()
                }
            ]
        }
        if (lang7 == undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[2].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang2) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[3].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang3) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[4].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang4) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[5].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang5) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[6].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang6) * 100) / 460).toString()
                }
            ]
        }
        if (lang8 == undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[2].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang2) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[3].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang3) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[4].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang4) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[5].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang5) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[6].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang6) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[7].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang7) * 100) / 460).toString()
                }
            ]
        }
        if (lang1 !== undefined && lang2 !== undefined && lang3 !== undefined && lang4 !== undefined && lang5 !== undefined && lang6 !== undefined && lang7 !== undefined && lang8 !== undefined) {
            data.languages.most_used_languages = [
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang1) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[2].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang2) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[3].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang3) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[4].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang4) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[5].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang5) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[6].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang6) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[7].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang7) * 100) / 460).toString()
                },
                {
                    language: payload.split('<div class="field center horizontal-wrap fill-width">')[1].split('</svg>')[8].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", ""),
                    percentage: ((Number(lang8) * 100) / 460).toString()
                }
            ]
        }
    }
    
    try {
        data.user.notable_contributions = payload.split('Notable contributions')[1].split('<div class="row organization contributions">')[1]
    } catch {
        data.user.notable_contributions = undefined
    }
    if (data.user.notable_contributions !== undefined) {
        var cont2;
        try {
            cont2 = data.user.notable_contributions.split('<span class="name">')[2].split('</span>')[0]
        } catch {
            cont2 = undefined
        }
        if (cont2 == undefined) {
            data.user.notable_contributions = [
                {
                    organization_name: data.user.notable_contributions.split('<span class="name">')[1].split('</span>')[0],
                    organization_github: "https://github.com/" + data.user.notable_contributions.split('<span class="name">')[1].split('</span>')[0].replace("@", ""),
                    organization_avatar: data.user.notable_contributions.split('<img class="organization avatar" src="')[1].split('"')[0]
                }
            ]
        } else {
            data.user.notable_contributions = [
                {
                    organization_name: data.user.notable_contributions.split('<span class="name">')[1].split('</span>')[0],
                    organization_github: "https://github.com/" + data.user.notable_contributions.split('<span class="name">')[1].split('</span>')[0].replace("@", ""),
                    organization_avatar: data.user.notable_contributions.split('<img class="organization avatar" src="')[1].split('"')[0]
                },
                {
                    organization_name: data.user.notable_contributions.split('<span class="name">')[2].split('</span>')[0],
                    organization_github: "https://github.com/" + data.user.notable_contributions.split('<span class="name">')[2].split('</span>')[0].replace("@", ""),
                    organization_avatar: data.user.notable_contributions.split('<img class="organization avatar" src="')[2].split('"')[0]
                }
            ]
        }
    } else {
        data.user.notable_contributions = undefined
    }
    data.contributions.best_streak = payload.split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"/></svg>')[1].split('Best streak ')[1].split(' ')[0] + " days"
    data.contributions.per_day = {};
    data.contributions.per_day.highest = payload.split('Contributions calendar')[1].split('Highest in a day at ')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", "")
    data.contributions.per_day.avarage = payload.split('Contributions calendar')[1].split('Average per day at ~')[1].split('</div>')[0].replace(/ /g, "").replace("\n", "").replace("\n", "")
    var ach1;
    var ach2;
    var ach3;
    var ach4;
    var ach5;
    var ach6;
    try {
        ach1 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[1].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach1 = undefined
    }
    try {
        ach2 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[2].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach2 = undefined
    }
    try {
        ach3 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[3].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach3 = undefined
    }
    try {
        ach4 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[4].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach4 = undefined
    }
    try {
        ach5 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[5].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach5 = undefined
    }
    try {
        ach6 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[6].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach6 = undefined
    }
    try {
        ach7 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[7].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach7 = undefined
    }
    try {
        ach8 = payload.split('<section class="achievements detailed largeable-flex-wrap">')[1].split('<div class="info">')[8].split('<span class="prefix">')[1].replace("</span>", "").split("\n")[0]
    } catch {
        ach8 = undefined
    }
    function class_finder(classes) {
        var payload;
        if (classes.startsWith('Master')) {
            payload = "Master"
        }
        else if (classes.startsWith('Super')) {
            payload = "Super"
        }
        else if (classes.startsWith('Great')) {
            payload = "Great"
        }
        else {
            payload = "Newbie"
        }
        return payload;
    }
    function class_value(class_data) {
        var payload;   
        if (class_data.startsWith('Master')) {
            if (class_data == "Master polyglot") {
                payload = "God of the Programming Languages"
            }
            if (class_data == "Master gister") {
                payload = "Master of Gists"
            }
            if (class_data == "Master maintainer") {
                payload = "God's Gift"
            }
            if (class_data == "Master inspirer") {
                payload = "Worldwide Famous Maintainer"
            }
            if (class_data == "Master deployer") {
                payload = "Famous Creations Leader"
            }
            if (class_data == "Master forker") {
                payload = "Innovative Leader"
            }
            if (class_data == "Master member") {
                payload = "Lived in the Age of Legends"
            }
            if (class_data == "Master worker") {
                payload = "World Organization Leader"
            }
            if (class_data == "Master influencer") {
                payload = "Github Famous"
            }
            if (class_data == "Master developer") {
                payload = "Github Architect"
            }
            if (class_data == "Master contributor") {
                payload = "Signed and Contributed!"
            }
            if (class_data == "Master reviewer") {
                payload = "Legend Observer"
            }
            if (class_data == "Master stargazer") {
                payload = "Clear-Headed Stargazer"
            }
            if (class_data == "Master follower") {
                payload = "Famous Tracker"
            }
            if (class_data == "Master packager") { // The Rarest Achievement in the Github History (Nearly Impossible) Only lower than %1 user has this achievement. Good Luck.
                payload = "Worked with God!"
            }
            if (class_data == "Master helper") {
                payload = "Fairy of Goodness"
            }
        } else if (class_data.startsWith('Super')) {
            if (class_data == "Super polyglot") {
                payload = "Code Master"
            }
            if (class_data == "Super gister") {
                payload = "Wanted Gister"
            }
            if (class_data == "Super inspirer") {
                payload = "Knowledgeable Inspirer"
            }
            if (class_data == "Super deployer") {
                payload = "Way to King!"
            }
            if (class_data == "Super forker") {
                payload = "Curious"
            }
            if (class_data == "Super member") {
                payload = "Stone-Age Hero"
            }
            if (class_data == "Super worker") {
                payload = "Organizer"
            }
            if (class_data == "Super influencer") {
                payload = "Prominent Freelancer"
            }
            if (class_data == "Super developer") {
                payload = "Matchless Developer"
            }
            if (class_data == "Super contributor") {
                payload = "Dactylogram"
            }
            if (class_data == "Super reviewer") {
                payload = "Researcher"
            }
            if (class_data == "Super stargazer") {
                payload = "Explorer"
            }
            if (class_data == "Super follower") {
                payload = "Discoverer Hunter"
            }
            if (class_data == "Super packager") { // The Rarest Achievement in the Github History (Nearly Impossible) Only lower than %1 user has this achievement. Good Luck.
                payload = "Kingdom of Packages"
            }
            if (class_data == "Super helper") {
                payload = "Benevolent"
            }
        } else {
            payload = undefined
        }
        return payload;
    }
    function achievement_namer(name) {
        return name.startsWith(" ") ? name.replace(" ", "") : name
    }
    if (ach1 == undefined) {
        data.achievements = undefined;
    }
    else if (ach2 == undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            }
        ]
    }
    else if (ach3 == undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            },
            {
                achievement: achievement_namer(ach2),
                caption: payload.split('<div class="text">')[2].split('</div>')[0],
                class: class_finder(achievement_namer(ach2)),
                exclusive_caption: class_value(achievement_namer(ach2))
            }
        ]
    }
    else if (ach4 == undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            },
            {
                achievement: achievement_namer(ach2),
                caption: payload.split('<div class="text">')[2].split('</div>')[0],
                class: class_finder(achievement_namer(ach2)),
                exclusive_caption: class_value(achievement_namer(ach2))
            },
            {
                achievement: achievement_namer(ach3),
                caption: payload.split('<div class="text">')[3].split('</div>')[0],
                class: class_finder(achievement_namer(ach3)),
                exclusive_caption: class_value(achievement_namer(ach3))
            }
        ]
    }
    else if (ach5 == undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            },
            {
                achievement: achievement_namer(ach2),
                caption: payload.split('<div class="text">')[2].split('</div>')[0],
                class: class_finder(achievement_namer(ach2)),
                exclusive_caption: class_value(achievement_namer(ach2))
            },
            {
                achievement: achievement_namer(ach3),
                caption: payload.split('<div class="text">')[3].split('</div>')[0],
                class: class_finder(achievement_namer(ach3)),
                exclusive_caption: class_value(achievement_namer(ach3))
            },
            {
                achievement: achievement_namer(ach4),
                caption: payload.split('<div class="text">')[4].split('</div>')[0],
                class: class_finder(achievement_namer(ach4)),
                exclusive_caption: class_value(achievement_namer(ach4))
            }
        ]
    }
    else if (ach6 == undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            },
            {
                achievement: achievement_namer(ach2),
                caption: payload.split('<div class="text">')[2].split('</div>')[0],
                class: class_finder(achievement_namer(ach2)),
                exclusive_caption: class_value(achievement_namer(ach2))
            },
            {
                achievement: achievement_namer(ach3),
                caption: payload.split('<div class="text">')[3].split('</div>')[0],
                class: class_finder(achievement_namer(ach3)),
                exclusive_caption: class_value(achievement_namer(ach3))
            },
            {
                achievement: achievement_namer(ach4),
                caption: payload.split('<div class="text">')[4].split('</div>')[0],
                class: class_finder(achievement_namer(ach4)),
                exclusive_caption: class_value(achievement_namer(ach4))
            },
            {
                achievement: achievement_namer(ach5),
                caption: payload.split('<div class="text">')[5].split('</div>')[0],
                class: class_finder(achievement_namer(ach5)),
                exclusive_caption: class_value(achievement_namer(ach5))
            }
        ]
    }
    else if (ach7 == undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            },
            {
                achievement: achievement_namer(ach2),
                caption: payload.split('<div class="text">')[2].split('</div>')[0],
                class: class_finder(achievement_namer(ach2)),
                exclusive_caption: class_value(achievement_namer(ach2))
            },
            {
                achievement: achievement_namer(ach3),
                caption: payload.split('<div class="text">')[3].split('</div>')[0],
                class: class_finder(achievement_namer(ach3)),
                exclusive_caption: class_value(achievement_namer(ach3))
            },
            {
                achievement: achievement_namer(ach4),
                caption: payload.split('<div class="text">')[4].split('</div>')[0],
                class: class_finder(achievement_namer(ach4)),
                exclusive_caption: class_value(achievement_namer(ach4))
            },
            {
                achievement: achievement_namer(ach5),
                caption: payload.split('<div class="text">')[5].split('</div>')[0],
                class: class_finder(achievement_namer(ach5)),
                exclusive_caption: class_value(achievement_namer(ach5))
            },
            {
                achievement: achievement_namer(ach6),
                caption: payload.split('<div class="text">')[6].split('</div>')[0],
                class: class_finder(achievement_namer(ach6)),
                exclusive_caption: class_value(achievement_namer(ach6))
            }
        ]
    }
    else if (ach8 == undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            },
            {
                achievement: achievement_namer(ach2),
                caption: payload.split('<div class="text">')[2].split('</div>')[0],
                class: class_finder(achievement_namer(ach2)),
                exclusive_caption: class_value(achievement_namer(ach2))
            },
            {
                achievement: achievement_namer(ach3),
                caption: payload.split('<div class="text">')[3].split('</div>')[0],
                class: class_finder(achievement_namer(ach3)),
                exclusive_caption: class_value(achievement_namer(ach3))
            },
            {
                achievement: achievement_namer(ach4),
                caption: payload.split('<div class="text">')[4].split('</div>')[0],
                class: class_finder(achievement_namer(ach4)),
                exclusive_caption: class_value(achievement_namer(ach4))
            },
            {
                achievement: achievement_namer(ach5),
                caption: payload.split('<div class="text">')[5].split('</div>')[0],
                class: class_finder(achievement_namer(ach5)),
                exclusive_caption: class_value(achievement_namer(ach5))
            },
            {
                achievement: achievement_namer(ach6),
                caption: payload.split('<div class="text">')[6].split('</div>')[0],
                class: class_finder(achievement_namer(ach6)),
                exclusive_caption: class_value(achievement_namer(ach6))
            },
            {
                achievement: achievement_namer(ach7),
                caption: payload.split('<div class="text">')[7].split('</div>')[0],
                class: class_finder(achievement_namer(ach7)),
                exclusive_caption: class_value(achievement_namer(ach7))
            }
        ]
    }
    if (ach1 !== undefined && ach2 !== undefined && ach3 !== undefined && ach4 !== undefined && ach5 !== undefined && ach6 !== undefined && ach7 !== undefined && ach8 !== undefined) {
        data.achievements = [
            {
                achievement: achievement_namer(ach1),
                caption: payload.split('<div class="text">')[1].split('</div>')[0],
                class: class_finder(achievement_namer(ach1)),
                exclusive_caption: class_value(achievement_namer(ach1))
            },
            {
                achievement: achievement_namer(ach2),
                caption: payload.split('<div class="text">')[2].split('</div>')[0],
                class: class_finder(achievement_namer(ach2)),
                exclusive_caption: class_value(achievement_namer(ach2))
            },
            {
                achievement: achievement_namer(ach3),
                caption: payload.split('<div class="text">')[3].split('</div>')[0],
                class: class_finder(achievement_namer(ach3)),
                exclusive_caption: class_value(achievement_namer(ach3))
            },
            {
                achievement: achievement_namer(ach4),
                caption: payload.split('<div class="text">')[4].split('</div>')[0],
                class: class_finder(achievement_namer(ach4)),
                exclusive_caption: class_value(achievement_namer(ach4))
            },
            {
                achievement: achievement_namer(ach5),
                caption: payload.split('<div class="text">')[5].split('</div>')[0],
                class: class_finder(achievement_namer(ach5)),
                exclusive_caption: class_value(achievement_namer(ach5))
            },
            {
                achievement: achievement_namer(ach6),
                caption: payload.split('<div class="text">')[6].split('</div>')[0],
                class: class_finder(achievement_namer(ach6)),
                exclusive_caption: class_value(achievement_namer(ach6))
            },
            {
                achievement: achievement_namer(ach7),
                caption: payload.split('<div class="text">')[7].split('</div>')[0],
                class: class_finder(achievement_namer(ach7)),
                exclusive_caption: class_value(achievement_namer(ach7))
            },
            {
                achievement: achievement_namer(ach8),
                caption: payload.split('<div class="text">')[8].split('</div>')[0],
                class: class_finder(achievement_namer(ach8)),
                exclusive_caption: class_value(achievement_namer(ach8))
            }
        ]
    }
    var if_snipped;
    try {
        if_snipped = payload.split('From <span class="blue space">')[1].split('</span>')[0]
    } catch {
        if_snipped = undefined
    }
    if (if_snipped == undefined) {
        data.code_snippet = undefined
    } else {
        data.code_snippet = {}
        data.code_snippet.repository = "https://www.github.com/" + if_snipped
        data.code_snippet.commit_name = payload.split('<section class="largeable-column-fields">')[3].split('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>')[1].split('</div>')[0].replace(/\n/gi, "").replace("              ", "").replace('            ', "")
        data.code_snippet.commit_date = payload.split('<section class="largeable-column-fields">')[2].split('On ')[1].split('</div>')[0].replace(/\n/gi, "").replace("              ", "").replace('            ', "")
        data.code_snippet.commit_code = payload.split('<section class="largeable-column-fields">')[3].split('<span class="code">')[1].split('</span>')[0]
        data.code_snippet.commit_file = payload.split('<section class="largeable-column-fields">')[3].split('<span class="code">')[2].split('</span>')[0]
        data.code_snippet.added_lines = payload.split('<section class="largeable-column-fields">')[3].split('<span class="code">')[3].split('additions">++')[1].split('<')[0]
        data.code_snippet.removed_lines = payload.split('<section class="largeable-column-fields">')[3].split('<span class="code">')[3].split('deletions">--')[1].split('<')[0]
    }
    data.languages.most_used_languages.map((Element) => {
        if (Element.language.length > 25) {
            delete Element.language
            delete Element.percentage
            delete Element;
        }
    });
    var blob = []
    data.languages.most_used_languages.filter(element3 => {
        if (Object.keys(element3).length == 0) {
            delete element3
        }
    });
    return data;

} 
module.exports = editBasicMetaGithub;