# Release Check List

- [ ] Did you update the version in package.json? "2.1.xx" Please do not prepend a v in the version string.
- [ ] Did you run "npm install" to update the package-lock.json file?
- [ ] Did you tag and commit your code for the release?

```
git commit -m "Update react-discovery-ui to {{REACT_VERSION}}, bump version to {{VERSION}}"
git tag -a "{{VERSION}}" -m "Update react-discovery-ui to {{REACT_VERSION}}, bump version to {{VERSION}}"
git push
git push origin "{{VERSION}}"
```

- [ ] Are you ready to cut the release on the GitHub code repo Releases page?
  - https://github.com/UrbanOS-Public/discovery_ui/releases/
