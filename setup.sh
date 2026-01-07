git config --local filter.git-sops.smudge "./.git-sops.sh smudge %f"
git config --local filter.git-sops.clean "./.git-sops.sh clean %f"
git config --local filter.git-sops.required true
git config --local diff.git-sops.textconv "cat"