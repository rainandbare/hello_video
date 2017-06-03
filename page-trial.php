<?php 


/* Template Name: Trial Folders */ 

 ?>
<?php get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">


		<div class="folders">
			<div class="folder about activeFolder">
				<h2 class="bold">Hello Video</h2>
				<h5 class="handwritten">is</h5>
				<p class="regText">	The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children.</p>
			 	<p class="regText">I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know </p>
				<div class="folder-footer">We make videos good, good, good</div>
			</div>
			<div class="folder who">
				<?php $contributorsArchive = new WP_Query( 
													array(
														'posts_per_page' => -1, 
												        'post_type' => 'contributor', 
													)
												 ); ?>

				<?php if ( $contributorsArchive->have_posts() ) : ?>

				    <?php while ( $contributorsArchive->have_posts() ) : $contributorsArchive->the_post(); ?>

				    <div class="person">
				    		<?php the_post_thumbnail( 'bio', array( 'alt' => get_the_title() . "'s Headshot", 'class' => 'contributor-photo' ) ); ?>
						<div class="person-infoLayer person-layer">
							<div class="name"><?php the_title(); ?></div>
							<div class="position"><?php the_field('title'); ?></div>
						</div>
						<div class="person-bioLayer person-layer">
							<div class="bio regText"><?php the_field('bio'); ?></div>
						</div>
						
					</div>
				        <?php wp_reset_postdata(); ?>
				<?php endwhile; ?>

				<?php endif; ?>

				<div class="folder-footer">We make videos good, good, good</div>
			</div>
			<div class="folder contact">
				<div class="info">
					<div class="stamp">
						<svg viewBox="0 0 180 91">
						    <defs>
						        <rect id="path-1" x="10" y="20" width="60" height="60"></rect>
						    </defs>
						    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						        <g id="Contact---Contact" transform="translate(-132.000000, -209.000000)">
						            <g id="CONTACT-PAGE" transform="translate(77.000000, 121.000000)">
						                <g id="Stamp" transform="translate(55.000000, 90.000000)">
						                    <rect id="Rectangle-2" fill="#C2B495" x="0" y="9" width="80" height="80"></rect>
						                    <g id="Rectangle-2">
						                        <use fill="#F33E42" fill-rule="evenodd" xlink:href="#path-1"></use>
						                        <rect stroke="#979797" stroke-width="1" x="10.5" y="20.5" width="59" height="59"></rect>
						                    </g>
						                    <g id="Group-5" transform="translate(74.000000, 21.000000)" fill="#FFFFFF">
						                        <path d="M0,12 L0,2.22044605e-16 C3.3137085,0 6,2.6862915 6,6 C6,9.3137085 3.3137085,12 0,12 Z" id="Combined-Shape" transform="translate(3.000000, 6.000000) rotate(180.000000) translate(-3.000000, -6.000000) "></path>
						                        <path d="M0,27 L0,15 C3.3137085,15 6,17.6862915 6,21 C6,24.3137085 3.3137085,27 0,27 Z" id="Combined-Shape" transform="translate(3.000000, 21.000000) rotate(180.000000) translate(-3.000000, -21.000000) "></path>
						                        <path d="M0,42 L0,30 C3.3137085,30 6,32.6862915 6,36 C6,39.3137085 3.3137085,42 0,42 Z" id="Combined-Shape" transform="translate(3.000000, 36.000000) rotate(180.000000) translate(-3.000000, -36.000000) "></path>
						                        <path d="M0,56 L0,44 C3.3137085,44 6,46.6862915 6,50 C6,53.3137085 3.3137085,56 0,56 Z" id="Combined-Shape" transform="translate(3.000000, 50.000000) rotate(180.000000) translate(-3.000000, -50.000000) "></path>
						                    </g>
						                    <g id="Group-4" transform="translate(0.000000, 21.000000)" fill="#FFFFFF">
						                        <path d="M0,12 L0,2.22044605e-16 C3.3137085,0 6,2.6862915 6,6 C6,9.3137085 3.3137085,12 0,12 Z" id="Combined-Shape" transform="translate(3.000000, 6.000000) rotate(360.000000) translate(-3.000000, -6.000000) "></path>
						                        <path d="M0,27 L0,15 C3.3137085,15 6,17.6862915 6,21 C6,24.3137085 3.3137085,27 0,27 Z" id="Combined-Shape" transform="translate(3.000000, 21.000000) rotate(360.000000) translate(-3.000000, -21.000000) "></path>
						                        <path d="M0,42 L0,30 C3.3137085,30 6,32.6862915 6,36 C6,39.3137085 3.3137085,42 0,42 Z" id="Combined-Shape" transform="translate(3.000000, 36.000000) rotate(360.000000) translate(-3.000000, -36.000000) "></path>
						                        <path d="M0,56 L0,44 C3.3137085,44 6,46.6862915 6,50 C6,53.3137085 3.3137085,56 0,56 Z" id="Combined-Shape" transform="translate(3.000000, 50.000000) rotate(360.000000) translate(-3.000000, -50.000000) "></path>
						                    </g>
						                    <g id="Group-3" transform="translate(40.000000, 12.000000) rotate(90.000000) translate(-40.000000, -12.000000) translate(37.000000, -16.000000)" fill="#FFFFFF">
						                        <path d="M0,12 L0,2.22044605e-16 C3.3137085,0 6,2.6862915 6,6 C6,9.3137085 3.3137085,12 0,12 Z" id="Combined-Shape" transform="translate(3.000000, 6.000000) rotate(360.000000) translate(-3.000000, -6.000000) "></path>
						                        <path d="M0,27 L0,15 C3.3137085,15 6,17.6862915 6,21 C6,24.3137085 3.3137085,27 0,27 Z" id="Combined-Shape" transform="translate(3.000000, 21.000000) rotate(360.000000) translate(-3.000000, -21.000000) "></path>
						                        <path d="M0,42 L0,30 C3.3137085,30 6,32.6862915 6,36 C6,39.3137085 3.3137085,42 0,42 Z" id="Combined-Shape" transform="translate(3.000000, 36.000000) rotate(360.000000) translate(-3.000000, -36.000000) "></path>
						                        <path d="M0,56 L0,44 C3.3137085,44 6,46.6862915 6,50 C6,53.3137085 3.3137085,56 0,56 Z" id="Combined-Shape" transform="translate(3.000000, 50.000000) rotate(360.000000) translate(-3.000000, -50.000000) "></path>
						                    </g>
						                    <g id="Group-3" transform="translate(40.000000, 86.000000) scale(1, -1) rotate(90.000000) translate(-40.000000, -86.000000) translate(37.000000, 58.000000)" fill="#FFFFFF">
						                        <path d="M0,12 L0,2.22044605e-16 C3.3137085,0 6,2.6862915 6,6 C6,9.3137085 3.3137085,12 0,12 Z" id="Combined-Shape" transform="translate(3.000000, 6.000000) rotate(360.000000) translate(-3.000000, -6.000000) "></path>
						                        <path d="M0,27 L0,15 C3.3137085,15 6,17.6862915 6,21 C6,24.3137085 3.3137085,27 0,27 Z" id="Combined-Shape" transform="translate(3.000000, 21.000000) rotate(360.000000) translate(-3.000000, -21.000000) "></path>
						                        <path d="M0,42 L0,30 C3.3137085,30 6,32.6862915 6,36 C6,39.3137085 3.3137085,42 0,42 Z" id="Combined-Shape" transform="translate(3.000000, 36.000000) rotate(360.000000) translate(-3.000000, -36.000000) "></path>
						                        <path d="M0,56 L0,44 C3.3137085,44 6,46.6862915 6,50 C6,53.3137085 3.3137085,56 0,56 Z" id="Combined-Shape" transform="translate(3.000000, 50.000000) rotate(360.000000) translate(-3.000000, -50.000000) "></path>
						                    </g>
						                    <g id="Group-6" transform="translate(25.000000, 0.000000)" stroke="#272927">
						                        <circle id="Oval-4" stroke-width="8" cx="35.5" cy="35.5" r="19.5"></circle>
						                        <path d="M53.5,22.0987726 C53.5,22.0987726 70.5182968,13.2695096 83.8380428,16.1389582 C97.1577887,19.0084068 104.967539,33.787344 116.952382,33.787344 C128.937226,33.787344 152.046875,22.0987726 152.046875,22.0987726" id="Line" stroke-width="3" stroke-linecap="square"></path>
						                        <path d="M53.5,28.4877726 C53.5,28.4877726 70.5182968,19.6585095 83.8380428,22.5279581 C97.1577887,25.3974067 104.967539,40.176344 116.952382,40.176344 C128.937226,40.176344 152.046875,28.4877726 152.046875,28.4877726" id="Line" stroke-width="3" stroke-linecap="square"></path>
						                        <path d="M53.5,40.8767725 C53.5,40.8767725 70.5182968,32.0475095 83.8380428,34.9169581 C97.1577887,37.7864067 104.967539,52.565344 116.952382,52.565344 C128.937226,52.565344 152.046875,40.8767725 152.046875,40.8767725" id="Line" stroke-width="3" stroke-linecap="square"></path>
						                        <path d="M53.5,49.8767725 C53.5,49.8767725 70.5182968,41.0475095 83.8380428,43.9169581 C97.1577887,46.7864067 104.967539,61.565344 116.952382,61.565344 C128.937226,61.565344 152.046875,49.8767725 152.046875,49.8767725" id="Line" stroke-width="3" stroke-linecap="square"></path>
						                        <circle id="Oval-3" stroke-width="4" cx="35" cy="35" r="35"></circle>
						                        <circle id="Oval-3" stroke-width="2" cx="35" cy="35" r="30"></circle>
						                    </g>
						                </g>
						            </g>
						        </g>
						    </g>
						</svg>
					</div>
          			<h2 class="bigger"><?php the_field("contact_paragraph"); ?></h2>
			        <h4><?php the_field("email"); ?></h4>
			        <h4><?php the_field("phone_number"); ?></h4> 
			        <p class="tagline">We make videos good, good, <span class="underline">good</span>.</p>
				</div>
				<div class="contactForm"><?php echo do_shortcode( '[contact-form-7 id="42" title="The Contact Form"]' )?></div>
			</div>
		</div>


    		<?php get_template_part( 'loop', 'index' );	?>
    </div> <!--/.content -->


  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>