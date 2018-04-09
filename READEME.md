## 安装和使用

### 安装

```shell
npm install githubsdk --save
```

### 使用

```js
(async () => {
  const githubSdk = sdk({
    Authorization: 'bearer yourtoken'
  });
  try {
    // 获取issues文章列表，可配置项，owner=zp1112, name=blog, first=7, after=''
    const data = await githubSdk.issues({
      owner: "zp1112",
      name: "blog"
    });
    // 获取issue单篇文章, 可配置项，owner=zp1112, name=blog, number=''
    const data1 = await githubSdk.issue({
      number: 1
    });
    // 获取issue单篇文章的评论，可配置项，owner=zp1112, name=blog, number='', first=5, after='', first表示需要几条，after表示从那一条评论开始数
    // 获取该issue前3个评论
    const data2 = await githubSdk.comments({
      number: 3,
      first: 3
    });
    // 获取该issue位于'Y3Vyc29yOnYyOpHOFqDj3Q=='后的3个评论
    const data3 = await githubSdk.comments({
      number: 3,
      first: 3,
      after: 'Y3Vyc29yOnYyOpHOFqDj3Q=='
    });
  } catch (err) {
    console.log(err)
  }
})();
```

