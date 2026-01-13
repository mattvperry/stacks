module.exports = {
    extends: [
        "config:recommended",
        "docker:pinDigests",
        "abandonments:recommended",
        "security:minimumReleaseAgeNpm",
    ],
    repositoryCache: "enabled",
    cacheDir: "/tmp/renovate/cache",
};