import "./App.css";

function App() {
  return (
    <div class="body">
      <header>
        <div class="logo">LOGO</div>
        <div class="navigation">
          <nav class="topnav">
            <a href=".">Home</a>
            <a href=".">Product</a>
            <a href=".">Company</a>
            <a href=".">Contact</a>
          </nav>
        </div>
        <div class="image">
          <div>Header image</div>
        </div>
      </header>
      <main>
        <div class="container">
          <div class="card">
            <div class="info">
              <h1>About</h1>
              <p>
                text text text text text text text text text text text text text
                text text text text text text text text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text text text text text text{" "}
              </p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h1>Company</h1>
              <p>
                text text text text text text text text text text text text text
                text text text text text text text text text text text text text
                text text text text text text text text text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text
              </p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h1>Services</h1>
              <p>
                text text text text text text text text text text text text text
                text text text text text text text text text text text text text
                text text text text text text text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text
              </p>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="endinfo">
            <div>
              <h1>Content</h1>
              <p>
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text
              </p>
            </div>
            <div>
              <h2>Sub Header</h2>
              <p>
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text Text Text Text
                Text Text Text Text Text Text Text Text Text Text
              </p>
            </div>
          </div>
          <div class="botnavigation">
            <div class="endnav">
              <h2>Navigation</h2>
              <nav class="botnav">
                <a href=".">Home</a>
                <a href=".">Product</a>
                <a href=".">Company</a>
                <a href=".">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
