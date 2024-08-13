import { Codeblock } from "../../components";

const LinkPage = () => {
  return (
    <>
      <small className="category-tag">Action</small>
      <h1 className="mb-4">Link</h1>

      <h2>Default</h2>
      <div className="msc-component-container-row">
        <a href="#" className="msc-link">
          Link
        </a>

        <a href="#" className="msc-link-sm">
          Link sm
        </a>
      </div>

      <Codeblock>
        {`
  // Link base 
  <a href="#" class="msc-link">Link</a>
              
  // Link sm 
  <a href="#" class="msc-link-sm">Link sm</a>
        `}
      </Codeblock>
      <br />

      <h2>Text Link</h2>
      <div className="msc-component-container-row">
        <a href="#" className="msc-text-link">
          Text Link
        </a>

        <a href="#" className="msc-text-link-sm">
          Text Link sm
        </a>
      </div>

      <Codeblock>
        {`
  // Link base 
  <a href="#" class="msc-text-link">Text Link</a>
              
  // Link sm 
  <a href="#" class="msc-text-link-sm">Text Link sm</a>
        `}
      </Codeblock>
      <br />

      <h2>Text Link</h2>
      <div className="msc-component-container-row">
        <a className="msc-dd-link-sm">
          <span id="dd-text">Show More</span>
          <svg
            id="dd-image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="msc-dd-link-icon"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default LinkPage;
