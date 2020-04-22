import Vue from 'vue'
// eslint-disable-next-line import/no-duplicates
import {
  Button, Form, FormItem, Input, Message, Container, Header, Aside, Main, Menu,
  Submenu, MenuItemGroup, MenuItem, Breadcrumb, BreadcrumbItem, Card, Row, Col,
  Table, TableColumn, Switch, Tooltip, Pagination, Dialog, MessageBox, Tag, Tree,
  Select, Option
} from 'element-ui'
// 导入弹框组件
// eslint-disable-next-line import/no-duplicates

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
// message自定义属性
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
