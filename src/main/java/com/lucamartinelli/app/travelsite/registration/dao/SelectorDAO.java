package com.lucamartinelli.app.travelsite.registration.dao;

import java.lang.annotation.Annotation;

import javax.enterprise.inject.Alternative;
import javax.enterprise.inject.Any;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.Instance;
import javax.enterprise.inject.Produces;
import javax.enterprise.util.AnnotationLiteral;
import javax.inject.Inject;
import javax.inject.Named;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.jboss.logging.Logger;

import io.quarkus.arc.Unremovable;

public class SelectorDAO {
	
	@Inject Logger log;
	
	@Produces
	@Default
	@Named("factory")
	RegistrationDAO getRegistrationDAO(@ConfigProperty(name = "registration.mode") String mode,
            @Named("DBDAO") Instance<RegistrationDAO> dbDAO,
            @Named("InMemoryDAO") Instance<RegistrationDAO> inMemoryDAO) {
		log.debug("Loading DAO implementation based on mode: " + mode);
		if ("DB".equals(mode)) {
			log.debug("DB mode found, loading Bean DB DAO");
			return dbDAO.get();
		} else {
			log.debug("not DB mode found, loading Bean IN_MEMORY DAO");
			return inMemoryDAO.get();
		}
	}
	
	public final static class LiteralUnremovable extends AnnotationLiteral<Unremovable> {

        public static final Unremovable INSTANCE = new Unremovable() {

			@Override
			public Class<? extends Annotation> annotationType() {
				return Unremovable.class;
			}
        	
        };

        private static final long serialVersionUID = 1L;

    }

}
