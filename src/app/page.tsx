import Hero from "./components/home/hero";
import Container from "./components/ui/container";
import PostCard from "./components/ui/post-card";
import Section from "./components/ui/section";

export default function Home() {
  return (
    <main>
      <Hero backgroundImage="/pexels-yankrukov-8199562.jpg" category="Technology" title="The Impact of Technology on the Workplace: How Technology is Changing"
      authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024"
      />
      <Section>
        <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
          <PostCard authorAvatar="/pexels-olly-846741.jpg"
      authorName="Manjunath Kottarki"
      date="04/07/2024" thumbnail="/pexels-yankrukov-8199562.jpg" title="The Imapct of Technology" description="The Impact of Technology on the Workplace: How Technology is Changing" category="Technology"/>
      
        </Container>
      </Section>
    </main>
  );
}
