import React from 'react'
import { Layout, Icon } from 'antd'
import { Switch, Route } from 'react-router-dom'
import articleList from './subpages/articleList'
import addArticle from './subpages/addArticle'
import edit from './subpages/edit'
import tagList from './subpages/tagList'
import addTag from './subpages/addTag'
import borad from './subpages/borad'
import './rightContent.scss'

let { Header, Footer } = Layout

class RightContent extends React.Component {

  toggle = () => {
    this.props.onCollapsedHandler()
  }

  render () {
    return (
      <Layout className="right-content">
        <Header className="right-content-header">
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          ></Icon>
        </Header>
        {/* 路由区 */}
        <Switch>
          <Route exact path="/" component={articleList} />
          <Route exact path="/addArticle" component={addArticle}/>
          <Route exact path="/edit/:postId" component={edit}></Route>
          <Route exact path="/tagList" component={tagList}></Route>
          <Route exact path="/addTag" component={addTag}></Route>
          <Route exact path="/borad" component={borad}></Route>
        </Switch>
        {/* 路由区 */}
        <Footer style={{ textAlign: 'center' }}>
        backMangner © 2018 - Created by React && Ant
        </Footer>
      </Layout>
    )
  }
}

export default RightContent