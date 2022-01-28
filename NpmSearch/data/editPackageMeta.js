var getPackageMetaFromQuery = require("./getPackageMetaFromQuery");
var getMorePackageMetaFromURL = require("./getMorePackageMetaFromURL");
async function editPackageMeta(query, limit, more_info) {
    var data = await getPackageMetaFromQuery(query)
    var payload;
    if (data.length == 0) {
        throw new Error("Cannot Found Any NPM Package!")
    }

    if (!more_info) {
        if (limit == 1) {
            var authtest1;
            try {
                var test1 = data[0].author.name
                authtest1 = test1
            } catch {
                authtest1 = undefined
            }
            payload = [
                {
                    name: data[0].name,
                    version: data[0].version,
                    description: data[0].description,
                    author: authtest1 == undefined ? "unknown" : authtest1,
                    author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                    keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                    npm_url: data[0].links.npm,
                    repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                    repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                    issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                    publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                    publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                    maintainers: data[0].maintainers
                }
            ]
        }
        if (limit == 2) {
            var authtest2;
            try {
                var test2 = data[0].author.name
                authtest2 = test2
            } catch {
                authtest2 = undefined
            }
            var authtest3;
            try {
                var test3 = data[1].author.name
                authtest3 = test3
            } catch {
                authtest3 = undefined
            }
            var trylimit2;
            try {
                trylimit2 = await getMorePackageMetaFromURL(data[1].links.npm)
            } catch {
                trylimit2 = undefined
            }
            if (trylimit2 == undefined) {
                payload = [
                    {
                        name: data[0].name,
                        version: data[0].version,
                        description: data[0].description,
                        author: authtest2 == undefined ? "unknown" : authtest2,
                        author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                        keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                        npm_url: data[0].links.npm,
                        repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                        repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                        issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                        publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                        publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                        maintainers: data[0].maintainers
                    }
                ]
            } else {
                payload = [
                    {
                        name: data[0].name,
                        version: data[0].version,
                        description: data[0].description,
                        author: authtest2 == undefined ? "unknown" : authtest2,
                        author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                        keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                        npm_url: data[0].links.npm,
                        repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                        repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                        issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                        publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                        publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                        maintainers: data[0].maintainers
                    },
                    {
                        name: data[1].name,
                        version: data[1].version,
                        description: data[1].description,
                        author: authtest3 == undefined ? "unknown" : authtest3,
                        author_github_username: data[1].scope == "unscoped" ? "unknown" : data[1].scope,
                        keywords: data[1].keywords == undefined ? [] : data[1].keywords,
                        npm_url: data[1].links.npm,
                        repository_homepage: data[1].links.homepage == undefined ? "unknown" : data[1].links.homepage,
                        repository_url: data[1].links.repository == undefined ? "unknown" : data[1].links.repository,
                        issues_url: data[1].links.bugs == undefined ? "unknown" : data[1].links.bugs,
                        publisher_name: data[1].publisher.username == undefined ? "unknown" : data[1].publisher.username,
                        publisher_mail: data[1].publisher.email == undefined ? "unknown" : data[1].publisher.email,
                        maintainers: data[1].maintainers
                    }
                ]
            }
        }
        if (limit == 3) {
            var authtest4;
            try {
                var test4 = data[0].author.name
                authtest4 = test4
            } catch {
                authtest4 = undefined
            }
            var authtest5;
            try {
                var test5 = data[1].author.name
                authtest5 = test5
            } catch {
                authtest5 = undefined
            }
            var authtest6;
            try {
                var test6 = data[2].author.name
                authtest6 = test6
            } catch {
                authtest6 = undefined
            }
            var trylimit3;
            try {
                trylimit3 = await getMorePackageMetaFromURL(data[1].links.npm)
            } catch {
                trylimit3 = undefined
            }
            var trylimit4;
            try {
                trylimit4 = await getMorePackageMetaFromURL(data[2].links.npm)
            } catch {
                trylimit4 = undefined
            }
            if (trylimit4 == undefined) {
                if (trylimit3 == undefined) {
                    payload = [
                        {
                            name: data[0].name,
                            version: data[0].version,
                            description: data[0].description,
                            author: authtest4 == undefined ? "unknown" : authtest4,
                            author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                            keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                            npm_url: data[0].links.npm,
                            repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                            repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                            issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                            publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                            publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                            maintainers: data[0].maintainers
                        }
                    ]
                } else {
                    payload = [
                        {
                            name: data[0].name,
                            version: data[0].version,
                            description: data[0].description,
                            author: authtest4 == undefined ? "unknown" : authtest4,
                            author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                            keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                            npm_url: data[0].links.npm,
                            repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                            repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                            issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                            publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                            publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                            maintainers: data[0].maintainers
                        },
                        {
                            name: data[1].name,
                            version: data[1].version,
                            description: data[1].description,
                            author: authtest5 == undefined ? "unknown" : authtest5,
                            author_github_username: data[1].scope == "unscoped" ? "unknown" : data[1].scope,
                            keywords: data[1].keywords == undefined ? [] : data[1].keywords,
                            npm_url: data[1].links.npm,
                            repository_homepage: data[1].links.homepage == undefined ? "unknown" : data[1].links.homepage,
                            repository_url: data[1].links.repository == undefined ? "unknown" : data[1].links.repository,
                            issues_url: data[1].links.bugs == undefined ? "unknown" : data[1].links.bugs,
                            publisher_name: data[1].publisher.username == undefined ? "unknown" : data[1].publisher.username,
                            publisher_mail: data[1].publisher.email == undefined ? "unknown" : data[1].publisher.email,
                            maintainers: data[1].maintainers
                        }
                    ]
                }
            } else {
                payload = [
                    {
                        name: data[0].name,
                        version: data[0].version,
                        description: data[0].description,
                        author: authtest4 == undefined ? "unknown" : authtest4,
                        author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                        keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                        npm_url: data[0].links.npm,
                        repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                        repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                        issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                        publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                        publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                        maintainers: data[0].maintainers
                    },
                    {
                        name: data[1].name,
                        version: data[1].version,
                        description: data[1].description,
                        author: authtest5 == undefined ? "unknown" : authtest5,
                        author_github_username: data[1].scope == "unscoped" ? "unknown" : data[1].scope,
                        keywords: data[1].keywords == undefined ? [] : data[1].keywords,
                        npm_url: data[1].links.npm,
                        repository_homepage: data[1].links.homepage == undefined ? "unknown" : data[1].links.homepage,
                        repository_url: data[1].links.repository == undefined ? "unknown" : data[1].links.repository,
                        issues_url: data[1].links.bugs == undefined ? "unknown" : data[1].links.bugs,
                        publisher_name: data[1].publisher.username == undefined ? "unknown" : data[1].publisher.username,
                        publisher_mail: data[1].publisher.email == undefined ? "unknown" : data[1].publisher.email,
                        maintainers: data[1].maintainers
                    },
                    {
                        name: data[2].name,
                        version: data[2].version,
                        description: data[2].description,
                        author: authtest6 == undefined ? "unknown" : authtest6,
                        author_github_username: data[2].scope == "unscoped" ? "unknown" : data[2].scope,
                        keywords: data[2].keywords == undefined ? [] : data[2].keywords,
                        npm_url: data[2].links.npm,
                        repository_homepage: data[2].links.homepage == undefined ? "unknown" : data[2].links.homepage,
                        repository_url: data[2].links.repository == undefined ? "unknown" : data[2].links.repository,
                        issues_url: data[2].links.bugs == undefined ? "unknown" : data[2].links.bugs,
                        publisher_name: data[2].publisher.username == undefined ? "unknown" : data[2].publisher.username,
                        publisher_mail: data[2].publisher.email == undefined ? "unknown" : data[2].publisher.email,
                        maintainers: data[2].maintainers
                    }
                ]
            }
        }
    } else {
        if (limit == 1) {
            var authtest7;
            try {
                var test7 = data[0].author.name
                authtest7 = test7
            } catch {
                authtest7 = undefined
            }
            var getMore1 = await getMorePackageMetaFromURL(data[0].links.npm)
            payload = [
                {
                    name: data[0].name,
                    version: data[0].version,
                    description: data[0].description,
                    author: authtest7 == undefined ? "unknown" : data[0].author.name,
                    author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                    keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                    npm_url: data[0].links.npm,
                    repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                    repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                    issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                    publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                    publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                    maintainers: data[0].maintainers,
                    more_info: {
                        last_publish: getMore1.last_publish,
                        dependencies: getMore1.dependencies,
                        dependents: getMore1.dependents,
                        all_versions: getMore1.all_versions,
                        weekly_downloads: getMore1.weekly_downloads,
                        lisance: getMore1.lisance,
                        size: getMore1.size,
                        total_files: getMore1.total_files,
                        install_command: getMore1.install_command
                    }
                }
            ]
        }
        if (limit == 2) {
            var getMore2 = await getMorePackageMetaFromURL(data[0].links.npm)
            var getMore3;
            try {
                getMore3 = await getMorePackageMetaFromURL(data[1].links.npm)
            } catch {
                getMore3 = undefined
            }
            var authtest8;
            try {
                var test8 = data[0].author.name
                authtest8 = test8
            } catch {
                authtest8 = undefined
            }
            var authtest9;
            try {
                var test9 = data[1].author.name
                authtest9 = test9
            } catch {
                authtest9 = undefined
            }
            if (getMore3 == undefined) {
                payload = [
                    {
                        name: data[0].name,
                        version: data[0].version,
                        description: data[0].description,
                        author: authtest8 == undefined ? "unknown" : data[0].author.name,
                        author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                        keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                        npm_url: data[0].links.npm,
                        repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                        repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                        issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                        publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                        publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                        maintainers: data[0].maintainers,
                        more_info: {
                            last_publish: getMore2.last_publish,
                            dependencies: getMore2.dependencies,
                            dependents: getMore2.dependents,
                            all_versions: getMore2.all_versions,
                            weekly_downloads: getMore2.weekly_downloads,
                            lisance: getMore2.lisance,
                            size: getMore2.size,
                            total_files: getMore2.total_files,
                            install_command: getMore2.install_command
                        }
                    }
                ]
            } else {
                payload = [
                    {
                        name: data[0].name,
                        version: data[0].version,
                        description: data[0].description,
                        author: authtest8 == undefined ? "unknown" : data[0].author.name,
                        author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                        keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                        npm_url: data[0].links.npm,
                        repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                        repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                        issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                        publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                        publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                        maintainers: data[0].maintainers,
                        more_info: {
                            last_publish: getMore2.last_publish,
                            dependencies: getMore2.dependencies,
                            dependents: getMore2.dependents,
                            all_versions: getMore2.all_versions,
                            weekly_downloads: getMore2.weekly_downloads,
                            lisance: getMore2.lisance,
                            size: getMore2.size,
                            total_files: getMore2.total_files,
                            install_command: getMore2.install_command
                        }
                    },
                    {
                        name: data[1].name,
                        version: data[1].version,
                        description: data[1].description,
                        author: authtest9 == undefined ? "unknown" : data[1].author.name,
                        author_github_username: data[1].scope == "unscoped" ? "unknown" : data[1].scope,
                        keywords: data[1].keywords == undefined ? [] : data[1].keywords,
                        npm_url: data[1].links.npm,
                        repository_homepage: data[1].links.homepage == undefined ? "unknown" : data[1].links.homepage,
                        repository_url: data[1].links.repository == undefined ? "unknown" : data[1].links.repository,
                        issues_url: data[1].links.bugs == undefined ? "unknown" : data[1].links.bugs,
                        publisher_name: data[1].publisher.username == undefined ? "unknown" : data[1].publisher.username,
                        publisher_mail: data[1].publisher.email == undefined ? "unknown" : data[1].publisher.email,
                        maintainers: data[1].maintainers,
                        more_info: {
                            last_publish: getMore3.last_publish,
                            dependencies: getMore3.dependencies,
                            dependents: getMore3.dependents,
                            all_versions: getMore3.all_versions,
                            weekly_downloads: getMore3.weekly_downloads,
                            lisance: getMore3.lisance,
                            size: getMore3.size,
                            total_files: getMore3.total_files,
                            install_command: getMore3.install_command
                        }
                    }
                ]
            }
        } if (limit == 3) {
            var getMore4 = await getMorePackageMetaFromURL(data[0].links.npm)
            var getMore5;
            var getMore6;
            try {
                getMore5 = await getMorePackageMetaFromURL(data[1].links.npm)
            } catch {
                getMore5 = undefined
            }
            try {
                getMore6 = await getMorePackageMetaFromURL(data[2].links.npm)
            } catch {
                getMore6 = undefined
            }
            var authtest10;
            try {
                var test10 = data[0].author.name
                authtest10 = test10
            } catch {
                authtest10 = undefined
            }
            var authtest11;
            try {
                var test11 = data[1].author.name
                authtest11 = test11
            } catch {
                authtest11 = undefined
            }
            var authtest12;
            try {
                var test12 = data[2].author.name
                authtest12 = test12
            } catch {
                authtest12 = undefined
            }
            if (getMore6 == undefined) {
                if (getMore5 == undefined) {
                    payload = [
                        {
                            name: data[0].name,
                            version: data[0].version,
                            description: data[0].description,
                            author: authtest10 == undefined ? "unknown" : data[0].author.name,
                            author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                            keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                            npm_url: data[0].links.npm,
                            repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                            repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                            issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                            publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                            publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                            maintainers: data[0].maintainers,
                            more_info: {
                                last_publish: getMore4.last_publish,
                                dependencies: getMore4.dependencies,
                                dependents: getMore4.dependents,
                                all_versions: getMore4.all_versions,
                                weekly_downloads: getMore4.weekly_downloads,
                                lisance: getMore4.lisance,
                                size: getMore4.size,
                                total_files: getMore4.total_files,
                                install_command: getMore4.install_command
                            }
                        }
                    ]
                } else {
                    payload = [
                        {
                            name: data[0].name,
                            version: data[0].version,
                            description: data[0].description,
                            author: authtest10 == undefined ? "unknown" : data[0].author.name,
                            author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                            keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                            npm_url: data[0].links.npm,
                            repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                            repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                            issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                            publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                            publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                            maintainers: data[0].maintainers,
                            more_info: {
                                last_publish: getMore4.last_publish,
                                dependencies: getMore4.dependencies,
                                dependents: getMore4.dependents,
                                all_versions: getMore4.all_versions,
                                weekly_downloads: getMore4.weekly_downloads,
                                lisance: getMore4.lisance,
                                size: getMore4.size,
                                total_files: getMore4.total_files,
                                install_command: getMore4.install_command
                            }
                        },
                        {
                            name: data[1].name,
                            version: data[1].version,
                            description: data[1].description,
                            author: authtest11 == undefined ? "unknown" : data[1].author.name,
                            author_github_username: data[1].scope == "unscoped" ? "unknown" : data[1].scope,
                            keywords: data[1].keywords == undefined ? [] : data[1].keywords,
                            npm_url: data[1].links.npm,
                            repository_homepage: data[1].links.homepage == undefined ? "unknown" : data[1].links.homepage,
                            repository_url: data[1].links.repository == undefined ? "unknown" : data[1].links.repository,
                            issues_url: data[1].links.bugs == undefined ? "unknown" : data[1].links.bugs,
                            publisher_name: data[1].publisher.username == undefined ? "unknown" : data[1].publisher.username,
                            publisher_mail: data[1].publisher.email == undefined ? "unknown" : data[1].publisher.email,
                            maintainers: data[1].maintainers,
                            more_info: {
                                last_publish: getMore5.last_publish,
                                dependencies: getMore5.dependencies,
                                dependents: getMore5.dependents,
                                all_versions: getMore5.all_versions,
                                weekly_downloads: getMore5.weekly_downloads,
                                lisance: getMore5.lisance,
                                size: getMore5.size,
                                total_files: getMore5.total_files,
                                install_command: getMore5.install_command
                            }
                        }
                    ]
                }
            } else {
                payload = [
                    {
                        name: data[0].name,
                        version: data[0].version,
                        description: data[0].description,
                        author: authtest10 == undefined ? "unknown" : data[0].author.name,
                        author_github_username: data[0].scope == "unscoped" ? "unknown" : data[0].scope,
                        keywords: data[0].keywords == undefined ? [] : data[0].keywords,
                        npm_url: data[0].links.npm,
                        repository_homepage: data[0].links.homepage == undefined ? "unknown" : data[0].links.homepage,
                        repository_url: data[0].links.repository == undefined ? "unknown" : data[0].links.repository,
                        issues_url: data[0].links.bugs == undefined ? "unknown" : data[0].links.bugs,
                        publisher_name: data[0].publisher.username == undefined ? "unknown" : data[0].publisher.username,
                        publisher_mail: data[0].publisher.email == undefined ? "unknown" : data[0].publisher.email,
                        maintainers: data[0].maintainers,
                        more_info: {
                            last_publish: getMore4.last_publish,
                            dependencies: getMore4.dependencies,
                            dependents: getMore4.dependents,
                            all_versions: getMore4.all_versions,
                            weekly_downloads: getMore4.weekly_downloads,
                            lisance: getMore4.lisance,
                            size: getMore4.size,
                            total_files: getMore4.total_files,
                            install_command: getMore4.install_command
                        }
                    },
                    {
                        name: data[1].name,
                        version: data[1].version,
                        description: data[1].description,
                        author: authtest11 == undefined ? "unknown" : data[1].author.name,
                        author_github_username: data[1].scope == "unscoped" ? "unknown" : data[1].scope,
                        keywords: data[1].keywords == undefined ? [] : data[1].keywords,
                        npm_url: data[1].links.npm,
                        repository_homepage: data[1].links.homepage == undefined ? "unknown" : data[1].links.homepage,
                        repository_url: data[1].links.repository == undefined ? "unknown" : data[1].links.repository,
                        issues_url: data[1].links.bugs == undefined ? "unknown" : data[1].links.bugs,
                        publisher_name: data[1].publisher.username == undefined ? "unknown" : data[1].publisher.username,
                        publisher_mail: data[1].publisher.email == undefined ? "unknown" : data[1].publisher.email,
                        maintainers: data[1].maintainers,
                        more_info: {
                            last_publish: getMore5.last_publish,
                            dependencies: getMore5.dependencies,
                            dependents: getMore5.dependents,
                            all_versions: getMore5.all_versions,
                            weekly_downloads: getMore5.weekly_downloads,
                            lisance: getMore5.lisance,
                            size: getMore5.size,
                            total_files: getMore5.total_files,
                            install_command: getMore5.install_command
                        }
                    },
                    {
                        name: data[2].name,
                        version: data[2].version,
                        description: data[2].description,
                        author: authtest12 == undefined ? "unknown" : data[2].author.name,
                        author_github_username: data[2].scope == "unscoped" ? "unknown" : data[2].scope,
                        keywords: data[2].keywords == undefined ? [] : data[2].keywords,
                        npm_url: data[2].links.npm,
                        repository_homepage: data[2].links.homepage == undefined ? "unknown" : data[2].links.homepage,
                        repository_url: data[2].links.repository == undefined ? "unknown" : data[2].links.repository,
                        issues_url: data[2].links.bugs == undefined ? "unknown" : data[2].links.bugs,
                        publisher_name: data[2].publisher.username == undefined ? "unknown" : data[2].publisher.username,
                        publisher_mail: data[2].publisher.email == undefined ? "unknown" : data[2].publisher.email,
                        maintainers: data[2].maintainers,
                        more_info: {
                            last_publish: getMore6.last_publish,
                            dependencies: getMore6.dependencies,
                            dependents: getMore6.dependents,
                            all_versions: getMore6.all_versions,
                            weekly_downloads: getMore6.weekly_downloads,
                            lisance: getMore6.lisance,
                            size: getMore6.size,
                            total_files: getMore6.total_files,
                            install_command: getMore6.install_command
                        }
                    }
                ]
            }
        }
    }
    return payload;
};
module.exports = editPackageMeta;