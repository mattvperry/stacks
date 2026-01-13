module.exports = {
    extends: [
        "config:recommended",
        "docker:pinDigests",
        "docker:enableMajor",
        "abandonments:recommended",
        "security:minimumReleaseAgeNpm",
    ],
    repositoryCache: "enabled",
    cacheDir: "/tmp/renovate/cache",
};