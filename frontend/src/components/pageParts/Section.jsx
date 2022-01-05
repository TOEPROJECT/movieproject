import movieAPi from "./movieAPI";

async function Section() {
  await movieAPi();
  return (
    <section class="section">
      <div class="productList" id="productList"></div>
    </section>
  );
}

export default Section;
