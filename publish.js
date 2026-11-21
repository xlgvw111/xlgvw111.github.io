var subdomains = [
    'thu',  // 清华大学 (Tsinghua University)
    'pku',  // 北京大学 (Peking University)
    'fdu',  // 复旦大学 (Fudan University)
    'sjtu', // 上海交通大学 (Shanghai Jiao Tong University)
    'zju',  // 浙江大学 (Zhejiang University)
    'nju',  // 南京大学 (Nanjing University)
    'xmu',  // 厦门大学 (Xiamen University)
    'sysu', // 中山大学 (Sun Yat-sen University)
    'whu',  // 武汉大学 (Wuhan University)
    'jlu',  // 吉林大学 (Jilin University)
    'scu',  // 四川大学 (Sichuan University)
    'ruc',  // 中国人民大学 (Renmin University of China)
    'bnu',  // 北京师范大学 (Beijing Normal University)
    'nku',  // 南开大学 (Nankai University)
    'tju'   // 同济大学 (Tongji University)
];[cite: 5]

var emails = [
    'xiaolanx36@gmail.com'
];

var newestUrls = [
    'https://nqpmzyce.cc',
    'https://exwkrgmwd.cc',
    'https://tofleaxtw.cc',
    'https://nqpmzyce.cc',
    'https://exwkrgmwd.cc',
    'https://tofleaxtw.cc',
    'https://nqpmzyce.cc',
    'https://exwkrgmwd.cc',
    'https://tofleaxtw.cc'
];

var newestEntryUrls = [
    'https://xlgv92.com',
    'https://xlgv91.com',
    'https://xlgv90.com'
];

var otherUrls = [
    'https://xlgvw111.pages.dev',
    'https://gitlab.com/xiaolan88',
    'https://xlgvw111.github.io'
];

var foreverUrls = [
    'https://xlgvw.com',
    'https://xlblw.com',
    'https://hlgay.com',
    'https://xlspw.com',
    'https://xlspw.me'
];

var notices = [
    '* 我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建议您使用手机自带Safria浏览器访问。',
    '* 大陆地区用户我们建议您可以使用VPN或者代理的方式来访问我们的永久地址。',
    '* 大陆地区用户我们强烈建议您截图收藏当前页面。'
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = '';
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');

    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = ' <img src="logo.png"  width="180"/>';
    mainElem.appendChild(logoElem);

    var newFavoritesElem = createFieldElem({title: '<font color=red><b>Ctrl+D</b></font> 收藏此页，永不迷路', items: ""});
    mainElem.appendChild(newFavoritesElem);

    var newestFieldElem = createFieldElem({title: '最新地址', items: newestUrls, text: '请使用https://协议访问小蓝视频网'});
    mainElem.appendChild(newestFieldElem);

    var newestEntryElem = createFieldElem({title: '最新入口', items: newestEntryUrls});
    mainElem.appendChild(newestEntryElem);

    var otherFieldElem = createFieldElem({title: '由于风控原因，网址经常被墙<br />务必保存下面所有地址发布页', items: otherUrls});
    mainElem.appendChild(otherFieldElem);

    var mailFieldElem = createFieldElem({title: '发送邮件获得最新地址', items: emails, plainText: true});
    mainElem.appendChild(mailFieldElem);

    var foreverFieldElem = createFieldElem({title: '永久地址', items: foreverUrls});
    mainElem.appendChild(foreverFieldElem);

    var noticeFieldElem = createFieldElem({title: '注意事项', items: notices, plainText: true, classStr: 'desc'});
    mainElem.appendChild(noticeFieldElem);
};
