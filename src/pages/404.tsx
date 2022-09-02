import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Stránka nenalezena"
        description="Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla přesunuta"
        noFollow={true}
        noIndex={true}
      />
      <Wrapper
        className="flex min-h-screen flex-col items-center justify-start"
        paddedContent="lg"
      >
        <MainHeading level={1} size="3xl" className="pt-20 md:pt-32">
          Stráka nenalazena
        </MainHeading>
        <Heading level={2} size="base" color="primary">
          Chyba 404
        </Heading>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 md:mt-20">
          <p className="max-w-prose text-center text-lg font-medium">
            Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla
            přesunuta. Kliknutím na následující tlačítko se dostanete na hlavní
            stránku webu.
          </p>
          <Link href={"/"}>
            <Button size="lg">Hlavní strana</Button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
