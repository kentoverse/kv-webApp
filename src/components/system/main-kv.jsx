import LogoText from "@components/cells/logo-text";
import NavbarMenu from "@components/organs/navbar-menu";
import NavbarBottom from "@components/organs/navbar-bottom";
import HeroNext from "@components/organs/hero-next";



export default function MainKV({ children }) {

    return (
        <>
        <main className="kvMain">


        {/* Image Gallery Component */}
   
       
   


        {/* Section Component */}
      <section className={`kvSection ${true} bg-white`}>
            <h2>Home Section</h2>
            <div className="grid grid-cols-4 gap-4" key={c.id}>
              {allData?.results.map(c =>
                <>
                  <p>{c.name}</p>
                  <p>{c.status}</p>
                  <p>{c.species}</p>
                  <p>{c.gender}</p>
                </>
              )};
        </div>
         
        </section>

        {/* Article Component */}
        <article class="kvArticle">
            <h1>Main Heading</h1>
            <p>Some text here...</p>
            <a href="#">Link to something</a>
        </article>

        <footer class="kvfooter">
        <p>&copy; 2023 My Website</p>
    </footer>
    <script src="script.js"></script>
    </main>
        </>
    )
}


// ${inter.variable} 
