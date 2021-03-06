class ProductList extends React.Component {
  handleUpVote (productId) {
    console.log(productId + ' was upvoted!')
  }//end handleUpVote

  render() {
    const products = Seed.products.sort((a, b) => (
      b.votes - a.votes
    ))

    const productComponents = Seed.products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleUpVote}
      />
    ))
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    )
  }
}//end ProductList Component

class Product extends React.Component {
  constructor (props) {
    super (props)

    this.handleUpVote = this.handleUpVote.bind(this)
  }

  handleUpVote () {
    this.props.onVote(this.props.id)
  }//end handleUpVote

  render () {
    console.log('this.props:', this.props)
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <h3>Votes:</h3>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>
              Submitted by:
            </span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    )
  }
}//end Product Component

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
