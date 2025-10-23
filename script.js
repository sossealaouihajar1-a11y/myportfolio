
    // Smooth internal link scrolling
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const tgt = document.querySelector(this.getAttribute('href'));
        if(tgt){ e.preventDefault(); tgt.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    });

    // IntersectionObserver reveal
    (function(){
      const obs = new IntersectionObserver((entries, o)=>{
        entries.forEach(e=>{
          if(e.isIntersecting){
            e.target.classList.add('revealed');
            o.unobserve(e.target);
          }
        });
      }, {threshold: 0.12});

      document.querySelectorAll('.animate-on-scroll').forEach((el, idx)=>{
        el.style.willChange = 'transform, opacity';
        // small stagger for nicer effect
        setTimeout(()=> obs.observe(el), 60 * idx);
      });

      // reveal project cards with delay
      document.querySelectorAll('.projects-grid .project-card').forEach((card, i)=>{
        setTimeout(()=> card.classList.add('revealed'), 180 * (i+1));
      });
    })();

    // formations reveal (once on scroll)
    window.addEventListener('scroll', () => {
      const section = document.getElementById('formations');
      if(!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        section.classList.add('revealed');
      }
    });

    // small accessibility: allow keyboard focus outline for buttons/links
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Tab') document.body.classList.add('show-focus');
    });


    // 
    // 
    // 
    // 
     const profile = document.querySelector('.profile-photo');
    if(profile){
      profile.style.transform = 'translateY(-20px) scale(0.95)';
      profile.style.opacity = 0;
      setTimeout(()=>{
        profile.style.transition = 'all 0.8s cubic-bezier(.2,.9,.3,1)';
        profile.style.transform = 'translateY(0) scale(1)';
        profile.style.opacity = 1;
      }, 300);
    }
        document.querySelectorAll('.skill-chip').forEach((chip, i)=>{
      chip.style.opacity = 0;
      chip.style.transform = 'translateY(20px)';
      setTimeout(()=>{
        chip.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        chip.style.opacity = 1;
        chip.style.transform = 'translateY(0)';
      }, i*150);
    });

// boutons flottants
document.querySelectorAll('.btn-accent, .btn-outline').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>{
    btn.style.transform = 'translateY(-4px) scale(1.03)';
    btn.style.transition = 'all 0.25s ease';
  });
  btn.addEventListener('mouseleave', ()=>{
    btn.style.transform = '';
  });
});

// cartes projets + compétences
document.querySelectorAll('.project-card, .competence-card').forEach(card=>{
  card.addEventListener('mouseenter', ()=>{
    card.style.transform = 'translateY(-6px) scale(1.02)';
    card.style.transition = 'all 0.28s ease';
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
  });
});
document.querySelectorAll('.animate-on-scroll').forEach((el, idx)=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(18px) translateX(-10px)';
  setTimeout(()=> {
    const observer = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.style.transition = 'opacity 0.66s ease, transform 0.66s cubic-bezier(.2,.9,.3,1)';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0) translateX(0)';
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    observer.observe(el);
  }, 80*idx); // petit stagger
});
document.querySelectorAll('.animated-title').forEach((el, i)=>{
  el.style.willChange = 'opacity, transform';
  const observer = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.2});
  observer.observe(el);
});



