# rm -rf dist &&
npm run build &&
# cd dist &&
git add . &&
git commit -m "update" &&
git push -f -u origin master