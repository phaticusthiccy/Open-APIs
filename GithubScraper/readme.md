# Github Extended & Enhanced Scraper

An unlimited github profile scraper.

## 🧾 Usage
```js
const Github = require("@phaticusthiccy/open-apis");

async function start() {
    var data = await Github.github_user("username")
    console.log(data)
}

// Outside of Async Function
Github.github_user("username").then(async (data) => {
    console.log(data)
})
```

##

## 📂 Response

```javascript
{
  user: {
    username: 'Github username',
    name: 'Github name',
    github_url: 'Github profile url',
    bio: 'Biography',
    avatar: 'Github profile picture download url',    
    creation_date: 'Account creation date',
    followers: 'Follower count',
    following: 'Followin count',
    organizations: 'Count of Organizations',
    contributed_repositories: 'Contributed Repositories',
    hireable: 'User Hire Status',
    repositories: 'Public Repositories Count',
    stargazers: 'Total Stars',
    starred_repositories: "User's starred repository count",
    sponsors: 'Sponsor count',
    sponsoring: "User's sponsoring projects count",
    forkers: "Total Fork of User's Projects",
    watchers: "Total Watcher of User's Projects",
    watching_repositories: "User's watching repository count",
    notable_contributions: [ 
        {
             organization_name: 'Contributed Organization Name',
             organization_github: 'Contributed Organization Github Url',
             organization_avatar: 'base64 avatar URI'
        }
     ]
  },
  activity: {
    commits: "User's Total Commit Count",
    reviewed_pull_requests: "User's Reviewed Pull Request Count",
    opened_pull_requests: "User's Opened Pull Request Count",
    opened_issues: "User's Opened Issues Count",
    issue_comments: "User's Total Issue Comments"
  },
  repositories: {
    total_added_lines: "User's Total Added Lines",
    total_removed_lines: "User's Total Removed Lines",
    preferred_license: "User's Most Used Lisance Name",
    relases: 'Total Releses',
    packages: 'Total Packages',
    used_space: 'Total Github Usage (KB - MB - GB)'
  },
  languages: {
    used_repo_languages: 'Native language of repositories',
    used_all_languages: 'All Languges User Used',
    most_used_languages: [
      {
        language: "Language Name,
        percentage: "Percentage of Using"
      }
      {
        ... (Maximum 8 Language Here)
      }
  },
  contributions: {
    best_streak: 'Days of Streak',
    per_day: { 
      highest: 'Highest Commit Count in One Day', 
      avarage: 'Avarage Daily Commit Count' 
    }
  },
  achievements: [
    {
      achievement: 'Achievement Name',
      caption: 'Achievement Description',
      class: 'Achievment Class', 
      exclusive_caption: 'Special Achievement Description'
    },
    {
      ... (class) = "Master" > "Super" > "Great" > "Newbie"
      ... (exclusive_caption) = Only Avaliable "Master" and "Super" Class, Other Will Return undefined
    }
  ],
  code_snippet: {
    repository: "Committed Repository Url",
    commit_name: "Commit Name",
    commit_date: "Commit Date",
    commit_code: "Commit Code",
    commit_file: "Path to Committed File",
    added_lines: "Total Added Lines in Commit",
    removed_lines: "Total Removed Lines in Commit"
  }
}
```

##

## IMPORTANT NOTES

Some object keys may retrun as undefined. This is not a big problem or a bug.

When someone of them returned undefined, that means there is no data in it.

Ex: If ```code_snippted``` retrun as undefined, that means user is not commited any repository this day.


===============================================


Achievement system is one of the most overrated objects. Users can find their achievements in it.

Like others, ```exclusive_caption``` key can return as undefined.

Ex: If ```exclusive_caption``` return as undefined, that means there is no special name for that achievement.

```exclusive_caption``` only avaliable with "Master" and "Super" Class achievements. "Graet" and "Newbie" class's will return undefined. 

##

## SAMPLE RESPONSE

```javascript
{
  user: {
    username: 'phaticusthiccy',
    name: 'Thiccy',
    github_url: 'https://www.github.com/phaticusthiccy',
    bio: 'No need to lie, Who am I?',
    avatar: 'https://github.com/phaticusthiccy.png',
    creation_date: '1 year ago',
    followers: '150',
    following: '4',
    organizations: '0',
    contributed_repositories: '27',
    hireable: 'Available for hire!',
    repositories: '28',
    stargazers: '340',
    starred_repositories: '60',
    sponsors: '0',
    sponsoring: '0',
    forkers: '1126',
    watchers: '45',
    watching_repositories: '22',
    notable_contributions: undefined
  },
  activity: {
    commits: '204703',
    reviewed_pull_requests: '17',
    opened_pull_requests: '23',
    opened_issues: '7',
    issue_comments: '269'
  },
  repositories: {
    total_added_lines: '371000',
    total_removed_lines: '56800',
    preferred_license: 'MIT',
    relases: '14',
    packages: '0',
    used_space: '44.9 Mb'
  },
  languages: {
    used_repo_languages: '13',
    used_all_languages: '17',
    most_used_languages: [
      { language: 'JavaScript', percentage: '81.31353277970908' },
      { language: 'EmacsLisp', percentage: '5.484799753836235' },
      { language: 'CSS', percentage: '4.297755587221463' },
      { language: 'Python', percentage: '3.078329163446146' },
      { language: 'JupyterNotebook', percentage: '2.41097626644297' },
      { language: 'Shell', percentage: '1.8726761884178482' },
      { language: 'HTML', percentage: '0.934836202191297' },
      { language: 'Nix', percentage: '0.6070940587349672' }
    ]
  },
  contributions: {
    best_streak: '5 days',
    per_day: { highest: '20', avarage: '0.97' }
  },
  achievements: [
    {
      achievement: 'Master inspirer',
      caption: 'Maintaining or created a repository which has been forked 1082 times',
      class: 'Master',
      exclusive_caption: 'Worldwide Famous Maintainer'
    },
    {
      achievement: 'Super polyglot',
      caption: 'Using 13 different programming languages',
      class: 'Super',
      exclusive_caption: 'Code Master'
    },
    {
      achievement: 'Super gister',
      caption: 'Published 88 gists',
      class: 'Super',
      exclusive_caption: 'Wanted Gister'
    },
    {
      achievement: 'Super deployer',
      caption: 'Repositories have been deployed 672 times',
      class: 'Super',
      exclusive_caption: 'Way to King!'
    },
    {
      achievement: 'Great developer',
      caption: 'Published 28 public repositories',
      class: 'Great',
      exclusive_caption: undefined
    },
    {
      achievement: 'Forker',
      caption: 'Forked 4 public repositories',
      class: 'Newbie',
      exclusive_caption: undefined
    },
    {
      achievement: 'Influencer',
      caption: 'Followed by 150 users',
      class: 'Newbie',
      exclusive_caption: undefined
    },
    {
      achievement: 'Stargazer',
      caption: 'Starred 60 repositories',
      class: 'Newbie',
      exclusive_caption: undefined
    }
  ],
  code_snippet: {
    repository: 'https://www.github.com/phaticusthiccy/Open-APIs',
    commit_name: 'Internal Test',
    commit_date: '1 Apr 2022, 00:17:10',
    commit_code: 'd3ad138a',
    commit_file: 'node_modules/ajv/lib/compile/equal.js',
    added_lines: '5',
    removed_lines: '0'
  }
}
```